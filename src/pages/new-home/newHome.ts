// صفحة new-home: تجمع بين الهيرو الأصلي + نسخة مستقلة من visual showcase بدون تعديل على الأنماط
import { createHeader, initHeader } from '../../components/header/header';
import { createHero } from '../../components/hero/hero';
import { initHeroSlider } from '../../components/hero/sliderInit';
import { createFooter, initFooter } from '../../components/footer/footer';
import { createStacked, initStacked } from '../../components/stacked/stacked';
import './standaloneShowcase.css';

// إدراج GSAP ديناميكيًا لنسخة من النمط المستقل
let gsap: any;
let ScrollTrigger: any;

async function loadGSAP() {
  if (!gsap) {
    const gsapModule = await import('gsap');
    const scrollTriggerModule = await import('gsap/ScrollTrigger');
    gsap = gsapModule.gsap;
    ScrollTrigger = scrollTriggerModule.ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);
  }
}

// تحقق من دعم scroll animations
const hasScrollSupport = CSS.supports(
  '(animation-timeline: view()) and (animation-range: 0 100%)'
);

// دالة لإنشاء القسم النصي الجديد
function createTextSection() {
  const section = document.createElement('section');
  section.className = 'text-section';
  
  section.innerHTML = `
    <div class="text-content">
      <div class="logo-container">
        <img src="/logo/Asset%202.svg" alt="جروث روتس" class="section-logo" />
      </div>
      <h1 class="main-title">نحوّل رؤيتك<br/>إلى مصنع ناجح</h1>
      <p class="subtitle">
        جروث روتس تقدم حلولاً متكاملة لتأسيس وتشغيل وتطوير مصانع اللحوم والدواجن والمنتجات البروتينية: من دراسات الجدوى والتصميم والتجهيز بالمعدات، مروراً بإدارة العمليات والتدريب وتطوير المنتجات، وحتى توريد الخامات وإعادة هيكلة المصانع المتعثرة. شريك موثوق في كل مرحلة.
      </p>
    </div>
  `;

  return section;
}

// دالة لإنشاء القسم المستقل تماما كما في test-outsource-standalone
function createStandaloneShowcase() {
  const section = document.createElement('div');
  section.className = 'standalone-showcase';
  
  // إدراج HTML كما هو في index.html المستقل
  section.innerHTML = `
    <div class="content-wrap" style="overflow: clip; background: light-dark(#fff, #000); z-index: 2;">
      <main style="margin-top: 0;">
        <section>
          <div class="content" style="min-height: 100vh; width: 100vw; display: flex; place-items: center; align-content: center; position: sticky; top: 0; overflow: visible;">
            <div class="grid" style="--offset: 0; width: 1600px; max-width: calc(100% - (2 * 2rem)); display: grid; grid-template-columns: repeat(5, 1fr); grid-template-rows: repeat(3, auto); gap: clamp(10px, 7.35vw, 80px); margin: 0 auto; align-content: center; position: absolute; top: 50%; left: 50%; translate: -50% -50%;">
              <div class="layer" style="display: grid; grid-column: 1 / -1; grid-row: 1 / -1; grid-template-columns: subgrid; grid-template-rows: subgrid;">
                <div style="grid-column: 1;"><img src="/licensed-image.jpeg" alt="معدات إنتاج حديثة" loading="lazy" style="width: 100%; aspect-ratio: 4 / 5; object-fit: cover; border-radius: 1rem;"/></div>
                <div style="grid-column: -2;"><img src="/licensed-image (1).jpeg" alt="خط إنتاج غذائي" loading="lazy" style="width: 100%; aspect-ratio: 4 / 5; object-fit: cover; border-radius: 1rem;"/></div>
                <div style="grid-column: 1;"><img src="/licensed-image (2).jpeg" alt="تجهيزات مصنع بروتيني" loading="lazy" style="width: 100%; aspect-ratio: 4 / 5; object-fit: cover; border-radius: 1rem;"/></div>
                <div style="grid-column: -2;"><img src="/unnamed (1).png" alt="دعم وتشغيل" loading="lazy" style="width: 100%; aspect-ratio: 4 / 5; object-fit: cover; border-radius: 1rem;"/></div>
                <div style="grid-column: 1;"><img src="/logo/Asset%201.svg" alt="شعار جروث روتس" loading="lazy" style="width: 100%; aspect-ratio: 4 / 5; object-fit: cover; border-radius: 1rem; background:#fff; padding:8px; object-fit:contain;"/></div>
                <div style="grid-column: -2;"><img src="/logo/Asset%202.svg" alt="هوية الشركة" loading="lazy" style="width: 100%; aspect-ratio: 4 / 5; object-fit: cover; border-radius: 1rem; background:#fff; padding:8px; object-fit:contain;"/></div>
              </div>
              <div class="layer" style="display: grid; grid-column: 1 / -1; grid-row: 1 / -1; grid-template-columns: subgrid; grid-template-rows: subgrid;">
                <div style="grid-column: calc(2 + var(--offset));"><img src="/licensed-image (1).jpeg" alt="تطوير المنتجات" loading="lazy" style="width: 100%; aspect-ratio: 4 / 5; object-fit: cover; border-radius: 1rem;"/></div>
                <div style="grid-column: calc(-3 - var(--offset));"><img src="/licensed-image (2).jpeg" alt="ضبط الجودة" loading="lazy" style="width: 100%; aspect-ratio: 4 / 5; object-fit: cover; border-radius: 1rem;"/></div>
                <div style="grid-column: calc(2 + var(--offset));"><img src="/licensed-image.jpeg" alt="تحسين الكفاءة" loading="lazy" style="width: 100%; aspect-ratio: 4 / 5; object-fit: cover; border-radius: 1rem;"/></div>
                <div style="grid-column: calc(-3 - var(--offset));"><img src="/unnamed (1).png" alt="استشارات فنية" loading="lazy" style="width: 100%; aspect-ratio: 4 / 5; object-fit: cover; border-radius: 1rem;"/></div>
                <div style="grid-column: calc(2 + var(--offset));"><img src="/logo/Asset%202.svg" alt="هوية مرئية" loading="lazy" style="width: 100%; aspect-ratio: 4 / 5; object-fit: cover; border-radius: 1rem; background:#fff; padding:8px; object-fit:contain;"/></div>
                <div style="grid-column: calc(-3 - var(--offset));"><img src="/logo/Asset%201.svg" alt="شريك صناعة الغذاء" loading="lazy" style="width: 100%; aspect-ratio: 4 / 5; object-fit: cover; border-radius: 1rem; background:#fff; padding:8px; object-fit:contain;"/></div>
              </div>
              <div class="layer" style="display: grid; grid-column: 1 / -1; grid-row: 1 / -1; grid-template-columns: subgrid; grid-template-rows: subgrid;">
                <div style="grid-column: calc(3 + var(--offset));"><img src="/licensed-image (2).jpeg" alt="حلول متكاملة" loading="lazy" style="width: 100%; aspect-ratio: 4 / 5; object-fit: cover; border-radius: 1rem;"/></div>
                <div style="grid-column: calc(3 + var(--offset)); grid-row: -1;"><img src="/licensed-image (1).jpeg" alt="دعم تشغيلي" loading="lazy" style="width: 100%; aspect-ratio: 4 / 5; object-fit: cover; border-radius: 1rem;"/></div>
              </div>
              
              <div class="scaler" style="position: relative; grid-area: 2 / calc(3 + var(--offset)); z-index: 2; width: 100%; height: 100%;">
                <video src="/videos/EMSTEEL.mp4" autoplay muted loop playsinline preload="metadata" aria-label="عرض تشغيلي لمصنع" style="position: absolute; top: 50%; left: 50%; translate: -50% -50%; object-fit: cover; border-radius: 1rem; width: 100%; height: 100%; background: #000;">
                  متصفحك لا يدعم تشغيل الفيديو.
                </video>
              </div>

            </div>
          </div>
        </section>
        <section style="display:grid; place-items:center; min-height:auto; padding:320px 80px;">
          <h2 class="fluid" style="margin:0; font-size: 72px; line-height: 1.15;">شريكك الصناعي الشامل</h2>
        </section>
      </main>
    </div>
  `;

  return section;
}

// دالة لتهيئة الرسوم المتحركة (نسخة من script.js)
async function initStandaloneAnimations() {
  const config = { 
    theme: 'system', 
    enhanced: true, 
    stick: true, 
    layers: true, 
    center: true, 
    stagger: 'range' 
  };

  // تعيين data attributes
  document.documentElement.dataset.theme = config.theme;
  document.documentElement.dataset.enhanced = config.enhanced.toString();
  document.documentElement.dataset.stick = config.stick.toString();
  document.documentElement.dataset.center = config.center.toString();
  document.documentElement.dataset.layers = config.layers.toString();
  document.documentElement.dataset.stagger = config.stagger;

  if (config.enhanced && !hasScrollSupport) {
    await loadGSAP();
    
    let scalerTl = gsap
      .timeline({
        scrollTrigger: {
          trigger: '.standalone-showcase main section:first-of-type',
          start: 'top -10%',
          end: 'bottom 80%',
          scrub: true,
        },
      })
      .from(
        '.standalone-showcase .scaler img, .standalone-showcase .scaler video',
        {
          height: (window.innerHeight * 0.6) - 32,
          ease: 'power1.inOut',
        },
        0
      )
      .from(
        '.standalone-showcase .scaler img, .standalone-showcase .scaler video',
        {
          width: (window.innerWidth * 0.6) - 32,
          ease: 'power2.inOut',
        },
        0
      );

    // الطبقات
    let layersTl = gsap
      .timeline({
        scrollTrigger: {
          trigger: '.standalone-showcase main section:first-of-type',
          start: 'top -40%',
          end: 'bottom bottom',
          scrub: true,
        },
      })
      .from(
        '.standalone-showcase .layer:nth-of-type(1)',
        {
          opacity: 0,
          ease: 'sine.out',
        },
        0
      )
      .from(
        '.standalone-showcase .layer:nth-of-type(1)',
        {
          scale: 0,
          ease: 'power1.inOut',
        },
        0
      )
      .from(
        '.standalone-showcase .layer:nth-of-type(2)',
        {
          opacity: 0,
          ease: 'sine.out',
        },
        0
      )
      .from(
        '.standalone-showcase .layer:nth-of-type(2)',
        {
          scale: 0,
          ease: 'power3.inOut',
        },
        0
      )
      .from(
        '.standalone-showcase .layer:nth-of-type(3)',
        {
          opacity: 0,
          ease: 'sine.out',
        },
        0
      )
      .from(
        '.standalone-showcase .layer:nth-of-type(3)',
        {
          scale: 0,
          ease: 'power4.inOut',
        },
        0
      );
  }
}

export async function mountNewHome(root: HTMLElement) {
  const frag = document.createDocumentFragment();

  // الهيدر + الهيرو كما في الصفحة الأصلية
  frag.appendChild(createHeader());
  frag.appendChild(createHero());

  // القسم النصي الجديد
  frag.appendChild(createTextSection());

  // القسم المستقل من test-outsource-standalone
  frag.appendChild(createStandaloneShowcase());

  // إضافة مكون stacked
  frag.appendChild(createStacked());

  // فوتر قياسي
  frag.appendChild(createFooter());

  root.appendChild(frag);

  // تهيئة الوظائف كما في الصفحة الرئيسية الأصلية
  initHeader();
  initHeroSlider();
  initFooter();

  // تهيئة مكون stacked
  initStacked();

  // تهيئة الرسوم المتحركة للقسم المستقل
  await initStandaloneAnimations();
}

export default { mountNewHome };
