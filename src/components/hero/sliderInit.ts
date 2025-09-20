import * as THREE from 'three';
import { gsap } from 'gsap';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import imagesLoaded from 'imagesloaded';

// Polyfill / fallback for imagesLoaded in case CDN is blocked
function imagesLoadedFallback(elements: HTMLImageElement[], callback: () => void) {
  try {
    const imgs = Array.from(elements);
    let remaining = imgs.length;
    if (remaining === 0) return callback();
    const done = () => {
      remaining--;
      if (remaining === 0) callback();
    };
    imgs.forEach(img => {
      if (img.complete && img.naturalWidth !== 0) {
        done();
      } else {
        img.addEventListener('load', done);
        img.addEventListener('error', done);
      }
    });
  } catch (e) {
    // if anything fails, call callback to avoid blocking
    callback();
  }
}

const imagesLoadedLib = (window as any).imagesLoaded || imagesLoaded || imagesLoadedFallback;

export function initHeroSlider() {
  const sliderElement = document.getElementById('slider');
  if (!sliderElement) {
    document.body.classList.remove('loading');
    return;
  }

  const images = Array.from(sliderElement.querySelectorAll('img')) as HTMLImageElement[];
  if (!images.length) {
    document.body.classList.remove('loading');
    return;
  }

  const displacementSlider = function (opts: { parent: HTMLElement; images: HTMLImageElement[] }) {
    const vertex = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      }
    `;

    const fragment = `
      varying vec2 vUv;
      uniform sampler2D currentImage;
      uniform sampler2D nextImage;
      uniform float dispFactor;
      
      void main() {
        vec2 uv = vUv;
        vec4 _currentImage;
        vec4 _nextImage;
        float intensity = 0.3;
        
        vec4 orig1 = texture2D(currentImage, uv);
        vec4 orig2 = texture2D(nextImage, uv);
        
        _currentImage = texture2D(currentImage, vec2(uv.x, uv.y + dispFactor * (orig2.r * intensity)));
        _nextImage = texture2D(nextImage, vec2(uv.x, uv.y + (1.0 - dispFactor) * (orig1.r * intensity)));
        
        vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);
        gl_FragColor = finalTexture;
      }
    `;

    const { parent, images } = opts;
    const sliderImages: THREE.Texture[] = [];
    const canvasWidth = images[0].clientWidth;
    const canvasHeight = images[0].clientHeight;
    const renderWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const renderHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    let renderW, renderH;
    if (renderWidth > canvasWidth) {
      renderW = renderWidth;
    } else {
      renderW = canvasWidth;
    }
    renderH = canvasHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x23272A, 1.0);
    renderer.setSize(renderW, renderH);
    parent.appendChild(renderer.domElement);

    // Start hidden then fade to avoid flash vs fallback image
    gsap.set(renderer.domElement, { autoAlpha: 0 });

    const loader = new THREE.TextureLoader();
    loader.crossOrigin = 'anonymous';

    images.forEach(img => {
      const image = loader.load(img.getAttribute('src')! + '?v=' + Date.now());
      image.magFilter = image.minFilter = THREE.LinearFilter;
      image.anisotropy = renderer.capabilities.getMaxAnisotropy();
      sliderImages.push(image);
    });

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x23272A);
    const camera = new THREE.OrthographicCamera(
      renderWidth / -2,
      renderWidth / 2,
      renderHeight / 2,
      renderHeight / -2,
      1,
      1000
    );
    camera.position.z = 1;

    const mat = new THREE.ShaderMaterial({
      uniforms: {
        dispFactor: { value: 0.0 },
        currentImage: { value: sliderImages[0] },
        nextImage: { value: sliderImages[1] || sliderImages[0] }
      },
      vertexShader: vertex,
      fragmentShader: fragment,
      transparent: true,
      opacity: 1.0
    });

    const geometry = new THREE.PlaneGeometry(parent.offsetWidth, parent.offsetHeight, 1);
    const object = new THREE.Mesh(geometry, mat);
    object.position.set(0, 0, 0);
    scene.add(object);

    const addEvents = function () {
      const pagButtons = Array.from(document.getElementById('pagination')!.querySelectorAll('button')) as HTMLButtonElement[];
      let isAnimating = false;
      let currentSlide = 0;
      let autoplayTimer: number | undefined;

      const setActive = (i: number) => {
        document.querySelector('#pagination button.active')?.classList.remove('active');
        pagButtons[i]?.classList.add('active');
      };

      const transitionTo = (slideId: number) => {
        if (isAnimating || slideId === currentSlide) return;
        
        isAnimating = true;
        currentSlide = slideId;
        
        // Clear existing autoplay
        if (autoplayTimer) {
          clearTimeout(autoplayTimer);
        }

        setActive(slideId);
        mat.uniforms.nextImage.value = sliderImages[slideId];
        mat.uniforms.nextImage.needsUpdate = true;

        const slideTitleEl = document.getElementById('slide-title');
        const slideStatusEl = document.getElementById('slide-status');
        const nextSlideTitle = document.querySelector(`[data-slide-title="${slideId}"]`)?.innerHTML || '';
        const nextSlideStatus = document.querySelector(`[data-slide-status="${slideId}"]`)?.innerHTML || '';

        // Animate title
        if (slideTitleEl) {
          gsap.fromTo(slideTitleEl, 
            { autoAlpha: 1, y: 0 },
            { 
              duration: 0.5, 
              autoAlpha: 0, 
              y: 20, 
              ease: 'expo.in', 
              onComplete: function () {
                slideTitleEl.innerHTML = nextSlideTitle;
                gsap.to(slideTitleEl, { duration: 0.5, autoAlpha: 1, y: 0 });
              }
            }
          );
        }

        // Animate status
        if (slideStatusEl) {
          gsap.fromTo(slideStatusEl,
            { autoAlpha: 1, y: 0 },
            {
              duration: 0.5,
              autoAlpha: 0,
              y: 20,
              ease: 'expo.in',
              onComplete: function () {
                slideStatusEl.innerHTML = nextSlideStatus;
                gsap.to(slideStatusEl, { duration: 0.5, autoAlpha: 1, y: 0, delay: 0.1 });
              }
            }
          );
        }

        // Animate displacement
        gsap.to(mat.uniforms.dispFactor, {
          duration: 1,
          value: 1,
          ease: 'expo.inOut',
          onComplete: function () {
            mat.uniforms.currentImage.value = sliderImages[slideId];
            mat.uniforms.currentImage.needsUpdate = true;
            mat.uniforms.dispFactor.value = 0.0;
            isAnimating = false;
            
            // Restart autoplay
            startAutoplay();
          }
        });
      };

      const startAutoplay = () => {
        if (autoplayTimer) {
          clearTimeout(autoplayTimer);
        }
        autoplayTimer = window.setTimeout(() => {
          const nextSlide = (currentSlide + 1) % sliderImages.length;
          transitionTo(nextSlide);
        }, 3000);
      };

      // Add click events to pagination buttons
      pagButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          const slideId = parseInt(btn.dataset.slide || '0', 10);
          transitionTo(slideId);
        });
      });

      // Set initial state
      setActive(0);
      startAutoplay();

      // Pause autoplay when page is hidden
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          if (autoplayTimer) {
            clearTimeout(autoplayTimer);
          }
        } else {
          startAutoplay();
        }
      });
    };

    addEvents();

    window.addEventListener('resize', function () {
      renderer.setSize(renderW, renderH);
    });

    let firstFrame = true;
    const animate = function () {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      
      if (firstFrame) {
        firstFrame = false;
        gsap.to(renderer.domElement, {
          duration: 0.6,
          autoAlpha: 1,
          onComplete: () => {
            (parent as HTMLElement).classList.remove('fallback-active');
          }
        });
      }
    };
    animate();
  };

  imagesLoadedLib(images, () => {
    document.body.classList.remove('loading');
    if (images[0].clientHeight > 0) {
      new (displacementSlider as any)({ parent: sliderElement, images });
    } else {
      // If dimensions still zero, keep fallback a bit longer
      setTimeout(() => {
        if (images[0].clientHeight > 0) {
          new (displacementSlider as any)({ parent: sliderElement, images });
        }
      }, 400);
    }
  });
}
