// Visual Demo Section (scoped, avoids global overrides from standalone demo)
import './visualDemo.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export function createVisualDemoSection(){
  const section = document.createElement('section');
  section.className='visual-demo-section';
  section.setAttribute('aria-labelledby','visual-demo-heading');
  section.innerHTML = `
    <div class="visual-demo-wrapper" data-demo-enhanced="true">
      <h2 id="visual-demo-heading" class="visual-demo-heading">استعراض بصري تفاعلي — تحول العمليات الصناعية إلى تجربة مرئية</h2>
      <div class="visual-demo-grid-container">
        <div class="visual-demo-grid">
          <div class="layer">
            <div><img src="/licensed-image.jpeg" alt="معدات إنتاج" loading="lazy"/></div>
            <div><img src="/licensed-image (1).jpeg" alt="خط إنتاج" loading="lazy"/></div>
            <div><img src="/licensed-image (2).jpeg" alt="تجهيزات" loading="lazy"/></div>
            <div><img src="/unnamed (1).png" alt="دعم وتشغيل" loading="lazy"/></div>
            <div><img src="/logo/Asset 1.svg" alt="شعار" loading="lazy" style="background:#fff;padding:8px;object-fit:contain;"/></div>
            <div><img src="/logo/Asset 2.svg" alt="هوية" loading="lazy" style="background:#fff;padding:8px;object-fit:contain;"/></div>
          </div>
          <div class="layer">
            <div><img src="/licensed-image (1).jpeg" alt="تطوير" loading="lazy"/></div>
            <div><img src="/licensed-image (2).jpeg" alt="جودة" loading="lazy"/></div>
            <div><img src="/licensed-image.jpeg" alt="تحسين" loading="lazy"/></div>
            <div><img src="/unnamed (1).png" alt="استشارات" loading="lazy"/></div>
            <div><img src="/logo/Asset 2.svg" alt="هوية" loading="lazy" style="background:#fff;padding:8px;object-fit:contain;"/></div>
            <div><img src="/logo/Asset 1.svg" alt="شريك" loading="lazy" style="background:#fff;padding:8px;object-fit:contain;"/></div>
          </div>
          <div class="layer">
            <div><img src="/licensed-image (2).jpeg" alt="حلول" loading="lazy"/></div>
            <div><img src="/licensed-image (1).jpeg" alt="دعم" loading="lazy"/></div>
          </div>
          <div class="scaler">
            <video src="/videos/EMSTEEL.mp4" autoplay muted loop playsinline preload="metadata" aria-label="عرض تشغيلي" style="width:16vw;max-width:280px;height:42vh;min-height:300px;object-fit:cover;border-radius:1rem;background:#000;"></video>
          </div>
        </div>
      </div>
      <div class="visual-demo-bottom"><p>حل متكامل لاستعراض طبقات العمل — نسخة مختصرة مدمجة داخل الصفحة.</p></div>
    </div>`;
  return section;
}

export function initVisualDemoSection(){
  const root = document.querySelector('.visual-demo-section') as HTMLElement;
  if(!root) return;
  const grid = root.querySelector('.visual-demo-grid');
  if(!grid) return;
  
  // Check for CSS scroll-driven animations support
  const supportsScrollTimeline = CSS.supports('animation-timeline', 'scroll()') && 
                                CSS.supports('animation-range', '0 100%');
  
  if (supportsScrollTimeline) {
    // Enable enhanced CSS scroll animations
    root.setAttribute('data-demo-enhanced', 'true');
    console.log('Visual Demo: Enhanced CSS scroll animations enabled');
  } else {
    // Fallback to GSAP animations
    const scaler = root.querySelector('.visual-demo-grid .scaler video');
    const layers = Array.from(root.querySelectorAll('.visual-demo-grid .layer')) as HTMLElement[];
    
    const tlScaler = gsap.timeline({
      scrollTrigger:{ trigger: root, start:'top center', end:'+=120%', scrub:true }
    });
    if(scaler){
      tlScaler.fromTo(scaler, { width:'18vw', height:'46vh' }, { width:'32vw', height:'70vh', ease:'none' }, 0);
    }
    
    const tlLayers = gsap.timeline({
      scrollTrigger:{ trigger: root, start:'top center', end:'+=150%', scrub:true }
    });
    layers.forEach((layer, idx) => {
      const delay = idx * 0.1;
      tlLayers.from(layer, { 
        opacity: 0, 
        scale: 0, 
        ease: 'power2.out',
        duration: 1
      }, delay);
    });
    
    console.log('Visual Demo: GSAP fallback animations enabled');
  }
  
  // Add intersection observer for performance
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.1 });
  
  observer.observe(root);
}
