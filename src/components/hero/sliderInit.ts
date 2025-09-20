// Displacement slider adapted for modular build (ESM imports)
import * as THREE from 'three';
import { gsap } from 'gsap';
// imagesLoaded ESM (no TS types bundled)
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import imagesLoaded from 'imagesloaded';

function waitForImages(imgs: HTMLImageElement[]): Promise<void> {
  return new Promise(resolve=>{
    try {
      if(!imgs.length){ resolve(); return; }
      imagesLoaded(imgs, ()=> resolve());
      // Fallback timeout safeguard (in case of edge failure)
      setTimeout(()=> resolve(), 8000);
    } catch { resolve(); }
  });
}

export function initHeroSlider(){
  const sliderElement = document.getElementById('slider');
  if(!sliderElement){ document.body.classList.remove('loading'); return; }
  const images = Array.from(sliderElement.querySelectorAll('img')) as HTMLImageElement[];
  if(!images.length){ document.body.classList.remove('loading'); return; }

  const displacementSlider = function(opts:{ parent:HTMLElement, images:HTMLImageElement[] }){
    const vertex = `varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`;
    const fragment = `varying vec2 vUv; uniform sampler2D currentImage; uniform sampler2D nextImage; uniform float dispFactor; void main(){ vec2 uv=vUv; vec4 orig1=texture2D(currentImage,uv); vec4 orig2=texture2D(nextImage,uv); float intensity=.3; vec4 _current=texture2D(currentImage,vec2(uv.x, uv.y + dispFactor*(orig2.r*intensity))); vec4 _next=texture2D(nextImage,vec2(uv.x, uv.y + (1.0-dispFactor)*(orig1.r*intensity))); gl_FragColor=mix(_current,_next,dispFactor); }`;
    const { parent, images } = opts; const sliderImages:any[]=[];
  const renderer = new THREE.WebGLRenderer({ antialias:false, alpha:true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0x23272A,1.0);
  parent.appendChild(renderer.domElement);
  // Start hidden then fade to avoid flash vs fallback image
  gsap.set(renderer.domElement, { autoAlpha:0 });
    const loader = new THREE.TextureLoader(); loader.crossOrigin='anonymous'; images.forEach(img=>{ const tex=loader.load(img.getAttribute('src')!+'?v='+Date.now()); tex.magFilter=tex.minFilter=THREE.LinearFilter; tex.anisotropy=renderer.capabilities.getMaxAnisotropy(); sliderImages.push(tex); });
    const scene=new THREE.Scene(); scene.background=new THREE.Color(0x23272A); const camera=new THREE.OrthographicCamera(1,1,1,1,1,1000); camera.position.z=1;
    const mat=new THREE.ShaderMaterial({ uniforms:{ dispFactor:{value:0.0}, currentImage:{value:sliderImages[0]}, nextImage:{value:sliderImages[1]} }, vertexShader:vertex, fragmentShader:fragment, transparent:true, opacity:1.0 });
    const geometry=new THREE.PlaneBufferGeometry(1,1,1); const object=new THREE.Mesh(geometry,mat); scene.add(object);
    let baseWidth=0, baseHeight=0; const onResize=()=>{ const w=parent.offsetWidth,h=parent.offsetHeight; renderer.setSize(w,h); camera.left=w/-2; camera.right=w/2; camera.top=h/2; camera.bottom=h/-2; camera.updateProjectionMatrix(); baseWidth=w; baseHeight=h; if(object.scale.x < w*1.15) object.scale.set(w,h,1); }; window.addEventListener('resize',onResize); onResize();
  const pagButtons = Array.from(document.querySelectorAll('#pagination button')) as HTMLButtonElement[]; let currentSlide=0; const zoomDuration=3; const transitionDuration=1; const zoomScale=1; const progressBar=document.querySelector('#slide-progress span') as HTMLElement|null; const progressWrap=document.getElementById('slide-progress'); const progressState={ v:0 }; let cycleTween:any=null, zoomTween:gsap.core.Tween|null=null, progressTween:gsap.core.Tween|null=null, transitioning=false;
    const setActive=(i:number)=>{ document.querySelector('#pagination button.active')?.classList.remove('active'); pagButtons[i]?.classList.add('active'); };
    const resetScale=()=>{ if(baseWidth&&baseHeight) object.scale.set(baseWidth,baseHeight,1); };
    const startZoom=()=>{ resetScale(); if(zoomTween) zoomTween.kill(); if(progressTween) progressTween.kill(); if(progressWrap) gsap.set(progressWrap,{ autoAlpha:1 }); if(baseWidth&&baseHeight){ zoomTween=gsap.to(object.scale, { duration:zoomDuration, x:baseWidth*zoomScale, y:baseHeight*zoomScale, ease:'expo.out' }); }
      if(progressBar){ progressState.v=0; progressBar.style.width='0%'; progressTween=gsap.to(progressState,{ duration:zoomDuration, v:100, ease:'expo.inOut', onUpdate:()=>{ if(progressBar) progressBar.style.width=progressState.v+'%'; } }); }
      cycleTween=gsap.delayedCall(zoomDuration, ()=> goNext()); };
    const transitionTo=(next:number)=>{ if(transitioning||next===currentSlide) return; transitioning=true; if(cycleTween) cycleTween.kill(); if(zoomTween) zoomTween.kill(); if(progressTween) progressTween.kill(); if(progressWrap) gsap.to(progressWrap,{ duration:.25, autoAlpha:0 }); mat.uniforms.nextImage.value=sliderImages[next]; mat.uniforms.nextImage.needsUpdate=true; setActive(next);
  const title=document.getElementById('slide-title');
  const status=document.getElementById('slide-status');
  const titleSpan = document.querySelector(`[data-slide-title="${next}"]`) as HTMLElement | null;
  const statusSpan = document.querySelector(`[data-slide-status="${next}"]`) as HTMLElement | null;
  const nextTitle = titleSpan ? titleSpan.innerHTML : '';
  const nextStatus = statusSpan ? statusSpan.innerHTML : '';
      if(title){ gsap.fromTo(title,{ autoAlpha:1, y:0 },{ duration:.4, autoAlpha:0, y:18, ease:'expo.in', onComplete:()=>{ title.innerHTML=nextTitle; gsap.to(title,{ duration:.45, autoAlpha:1, y:0 }); }}); }
      if(status){ gsap.fromTo(status,{ autoAlpha:1, y:0 },{ duration:.4, autoAlpha:0, y:18, ease:'expo.in', onComplete:()=>{ status.innerHTML=nextStatus; gsap.to(status,{ duration:.45, autoAlpha:1, y:0, delay:.05 }); }}); }
      resetScale();
      gsap.to(mat.uniforms.dispFactor,{ duration:transitionDuration, value:1, ease:'expo.inOut', onComplete:()=>{ mat.uniforms.currentImage.value=sliderImages[next]; mat.uniforms.currentImage.needsUpdate=true; mat.uniforms.dispFactor.value=0.0; currentSlide=next; transitioning=false; startZoom(); }});
    };
    const goNext=()=> transitionTo((currentSlide+1)%sliderImages.length);
    pagButtons.forEach(b=> b.addEventListener('click',()=> transitionTo(parseInt(b.dataset.slide||'0'))));
    setActive(0); startZoom();
    let firstFrame = true;
    const animate=()=>{ requestAnimationFrame(animate); renderer.render(scene,camera); if(firstFrame){ firstFrame=false; gsap.to(renderer.domElement,{ duration:0.6, autoAlpha:1, onComplete:()=>{ (parent as HTMLElement).classList.remove('fallback-active'); }}); } };
    animate();
  };

  waitForImages(images).then(()=>{
    document.body.classList.remove('loading');
    if(images[0].clientHeight>0){
      new (displacementSlider as any)({ parent: sliderElement, images });
    } else {
      // If dimensions still zero, keep fallback a bit longer
      setTimeout(()=>{ if(images[0].clientHeight>0){ new (displacementSlider as any)({ parent: sliderElement, images }); } },400);
    }
  }).catch(()=>{ document.body.classList.remove('loading'); });
}
