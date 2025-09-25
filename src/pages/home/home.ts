// صفحة home (مستنسخة من new-home): تجمع بين الهيدر الأصلي + نسخة مستقلة من visual showcase بدون تعديل على الأنماط
import { createHeader, initHeader } from '../../components/header/header';
import { createHero } from '../../components/hero/hero';
import { initHeroSlider } from '../../components/hero/sliderInit';
import { createFooter, initFooter } from '../../components/footer/footer';
import { createStacked, initStacked } from '../../components/stacked/stacked';
import './standaloneShowcase.css';
import './home-extras.css';
import './modern-sections.css';

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

// ----------------------
// Modern Sections - ثلاثة سكاشن عصرية جديدة
// ----------------------

// السكشن الأول: الإحصائيات مع أنيميشن العدادات
function createStatsSection(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'stats-section animate-on-scroll';
  
  section.innerHTML = `
    <div class="stats-container">
      <div class="stats-header">
        <span class="stats-badge">إنجازاتنا بالأرقام</span>
        <h2 class="stats-title">خبرة تتحدث عن نفسها</h2>
        <p class="stats-subtitle">أكثر من عقدين من الخبرة في تأسيس وتطوير مصانع الأغذية والبروتينات</p>
      </div>
      <div class="stats-grid">
        <div class="stat-card">
          <span class="stat-number" data-target="20">0</span>
          <h3 class="stat-label">سنة خبرة</h3>
          <p class="stat-description">في مجال الصناعات الغذائية والبروتينية</p>
        </div>
        <div class="stat-card">
          <span class="stat-number" data-target="150">0</span>
          <h3 class="stat-label">مشروع منجز</h3>
          <p class="stat-description">من المصانع والخطوط الإنتاجية المتكاملة</p>
        </div>
        <div class="stat-card">
          <span class="stat-number" data-target="50">0</span>
          <h3 class="stat-label">عميل راضي</h3>
          <p class="stat-description">يثقون في خدماتنا وحلولنا المتكاملة</p>
        </div>
        <div class="stat-card">
          <span class="stat-number" data-target="95">0</span>
          <h3 class="stat-label">% نسبة النجاح</h3>
          <p class="stat-description">في تسليم المشاريع في الوقت المحدد</p>
        </div>
      </div>
    </div>
  `;
  
  return section;
}

// السكشن الثاني: الخدمات التفاعلية
function createInteractiveServicesSection(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'services-section animate-on-scroll';
  
  section.innerHTML = `
    <div class="services-container">
      <div class="services-header">
        <span class="stats-badge">خدماتنا المتميزة</span>
        <h2 class="stats-title">حلول شاملة لكل احتياجاتك</h2>
        <p class="stats-subtitle">نقدم مجموعة متكاملة من الخدمات لضمان نجاح مشروعك الصناعي</p>
      </div>
      <div class="services-grid">
        <div class="service-card">
          <img src="/licensed-image.jpeg" alt="تأسيس المصانع" class="service-image" loading="lazy">
          <div class="service-content">
            <div class="service-icon">🏭</div>
            <h3 class="service-title">تأسيس المصانع</h3>
            <p class="service-description">نقدم خدمات شاملة لتأسيس المصانع من الصفر بأحدث التقنيات والمعايير العالمية.</p>
            <ul class="service-features">
              <li>دراسات الجدوى الاقتصادية</li>
              <li>التصميم الهندسي المتكامل</li>
              <li>الحصول على التراخيص</li>
            </ul>
            <button class="service-cta">اطلب استشارة</button>
          </div>
        </div>
        <div class="service-card">
          <img src="/licensed-image (1).jpeg" alt="توريد المعدات" class="service-image" loading="lazy">
          <div class="service-content">
            <div class="service-icon">⚙️</div>
            <h3 class="service-title">توريد المعدات</h3>
            <p class="service-description">نوفر أحدث المعدات والخطوط الإنتاجية من أفضل الشركات العالمية.</p>
            <ul class="service-features">
              <li>معدات عالية الجودة</li>
              <li>تركيب وتشغيل</li>
              <li>صيانة وضمان</li>
            </ul>
            <button class="service-cta">تصفح المعدات</button>
          </div>
        </div>
        <div class="service-card">
          <img src="/licensed-image (2).jpeg" alt="إدارة التشغيل" class="service-image" loading="lazy">
          <div class="service-content">
            <div class="service-icon">📊</div>
            <h3 class="service-title">إدارة التشغيل</h3>
            <p class="service-description">نساعدك في إدارة وتشغيل مصنعك بكفاءة عالية لضمان أقصى ربحية.</p>
            <ul class="service-features">
              <li>تحسين العمليات</li>
              <li>إدارة الجودة</li>
              <li>تدريب الفرق</li>
            </ul>
            <button class="service-cta">ابدأ الآن</button>
          </div>
        </div>
      </div>
    </div>
  `;
  
  return section;
}

// السكشن الثالث: شهادات العملاء مع carousel
function createTestimonialsCarousel(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'testimonials-section animate-on-scroll';
  
  section.innerHTML = `
    <div class="testimonials-container">
      <div class="testimonials-header">
        <span class="stats-badge">آراء عملائنا</span>
        <h2 class="stats-title">قصص نجاح حقيقية</h2>
        <p class="stats-subtitle">اكتشف كيف ساعدنا عملاءنا في تحقيق أهدافهم وتطوير أعمالهم</p>
      </div>
      <div class="testimonials-carousel">
        <div class="testimonials-track">
          <div class="testimonial-slide">
            <div class="testimonial-quote">
              منذ تعاوننا مع جروث روتس، تحسن الأداء التشغيلي لمصنعنا بشكل ملحوظ. فريق محترف ومتخصص يقدم حلولاً عملية ومبتكرة.
            </div>
            <div class="testimonial-author">
              <img src="/logo/Asset%201.svg" alt="مصنع دلتا" class="author-avatar">
              <div class="author-info">
                <h4>أحمد محمد</h4>
                <p>مدير عام - مصنع دلتا للأغذية</p>
              </div>
            </div>
          </div>
          <div class="testimonial-slide">
            <div class="testimonial-quote">
              دعم شامل بدءاً من التصميم وحتى التشغيل. فريق جروث روتس محترف ويتميز بالالتزام والجودة في التنفيذ.
            </div>
            <div class="testimonial-author">
              <img src="/logo/Asset%202.svg" alt="شركة النخبة" class="author-avatar">
              <div class="author-info">
                <h4>سارة أحمد</h4>
                <p>مديرة المشاريع - شركة النخبة</p>
              </div>
            </div>
          </div>
          <div class="testimonial-slide">
            <div class="testimonial-quote">
              تعاون مرن وسريع أدى إلى خفض فترات الإطلاق بنسبة كبيرة. نوصي بشدة بخدمات جروث روتس لأي مستثمر في القطاع الغذائي.
            </div>
            <div class="testimonial-author">
              <img src="/licensed-image.jpeg" alt="مصنع الكوثر" class="author-avatar">
              <div class="author-info">
                <h4>محمد علي</h4>
                <p>المدير التنفيذي - مصنع الكوثر</p>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-controls">
          <button class="carousel-btn prev-btn">‹</button>
          <button class="carousel-btn next-btn">›</button>
        </div>
        <div class="carousel-indicators">
          <span class="indicator active" data-slide="0"></span>
          <span class="indicator" data-slide="1"></span>
          <span class="indicator" data-slide="2"></span>
        </div>
      </div>
    </div>
  `;
  
  return section;
}

// ----------------------
// New home extra sections
// ----------------------
function createHomeExtras(): DocumentFragment {
  const frag = document.createDocumentFragment();

  // 1) Feature cards strip
  const features = document.createElement('section');
  features.className = 'home-extras features-strip reveal-on-scroll';
  features.innerHTML = `
    <div class="container">
      <h2 class="hx-title">حلولنا المؤثرة</h2>
      <div class="cards-grid">
        <article class="card">
          <div class="card-media"><img src="/licensed-image.jpeg" alt="حلول تشغيل" loading="lazy"></div>
          <div class="card-body">
            <h3>تصميم وتشغيل خطوط إنتاج</h3>
            <p>نخطط وننفذ خطوط إنتاج متوافقة مع احتياجات مصنعك لتقليل الهدر وزيادة الإنتاجية.</p>
            <div class="card-cta"><button class="btn-primary small">اطلع أكثر</button></div>
          </div>
        </article>
        <article class="card">
          <div class="card-media"><img src="/licensed-image (1).jpeg" alt="توريد معدات" loading="lazy"></div>
          <div class="card-body">
            <h3>توريد وتجهيز معدات</h3>
            <p>توريد معدات موثوقة مع تركيب ومتابعة تشغيل مبدئية لإطلاق سلس.</p>
            <div class="card-cta"><button class="btn-primary small">اطلع أكثر</button></div>
          </div>
        </article>
        <article class="card">
          <div class="card-media"><img src="/licensed-image (2).jpeg" alt="تطوير منتجات" loading="lazy"></div>
          <div class="card-body">
            <h3>تطوير منتجات وبراهين مفهوم</h3>
            <p>خبرتنا تساعدك على طرح منتجات عملية تناسب السوق والمصنع.</p>
            <div class="card-cta"><button class="btn-primary small">اطلع أكثر</button></div>
          </div>
        </article>
      </div>
    </div>
  `;
  frag.appendChild(features);

  // 2) Why-us split with subtle parallax image
  const why = document.createElement('section');
  why.className = 'home-extras why-us reveal-on-scroll';
  why.innerHTML = `
    <div class="container why-grid">
      <div class="why-media" aria-hidden="true">
        <div class="parallax-wrap"><img src="/unnamed (1).png" alt="دعم تشغيلي" loading="lazy"></div>
      </div>
      <div class="why-content">
        <span class="hx-badge">لماذا جروث روتس</span>
        <h2>شريكك من الفكرة إلى التشغيل</h2>
        <p class="lead">نقدّم نهجاً متكاملاً يجمع بين الهندسة والتشغيل وجودة المنتج لنرفع جاهزية منشأتك التشغيلية بأسرع وقت.</p>
        <ul class="why-list">
          <li>دراسات جدوى متعمقة</li>
          <li>تصميم خطوط إنتاج مرن</li>
          <li>تدريب ورفع كفاءة الفرق</li>
        </ul>
      </div>
    </div>
  `;
  frag.appendChild(why);

  // 3) Testimonials / rotating quote
  const quotes = document.createElement('section');
  quotes.className = 'home-extras quotes reveal-on-scroll';
  quotes.innerHTML = `
    <div class="container">
      <h2 class="hx-title">آراء شركائنا</h2>
      <div class="quote-slider" data-slide="0">
        <blockquote class="quote active">"منذ تعاوننا مع جروث روتس تحسّن الأداء التشغيلي بشكل ملحوظ"<cite>— مصنع دلتا للأغذية</cite></blockquote>
        <blockquote class="quote">"دعم شامل بدءاً من التصميم وحتى التشغيل — فريق محترف"<cite>— شركة النخبة</cite></blockquote>
        <blockquote class="quote">"تعاون مرن وسريع أدى إلى خفض فترات الإطلاق بنسبة كبيرة"<cite>— مصنع الكوثر</cite></blockquote>
      </div>
    </div>
  `;
  frag.appendChild(quotes);

  return frag;
}

// تهيئة السكاشن العصرية الجديدة
function initModernSections(): void {
  // Intersection Observer للأنيميشن عند الظهور
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const el = entry.target as HTMLElement;
      if (entry.isIntersecting) {
        el.classList.add('in-view');
        
        // تشغيل أنيميشن العدادات
        if (el.classList.contains('stats-section')) {
          animateCounters(el);
        }
      }
    });
  }, { threshold: 0.2 });

  // مراقبة السكاشن الجديدة
  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
  
  // تهيئة carousel الشهادات
  initTestimonialsCarousel();
}

// أنيميشن العدادات
function animateCounters(section: HTMLElement): void {
  const counters = section.querySelectorAll('.stat-number');
  
  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute('data-target') || '0');
    const duration = 2000; // 2 ثانية
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    counter.classList.add('counting');
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      counter.textContent = Math.floor(current).toString();
    }, 16);
  });
}

// تهيئة carousel الشهادات
function initTestimonialsCarousel(): void {
  const carousel = document.querySelector('.testimonials-carousel');
  if (!carousel) return;
  
  const track = carousel.querySelector('.testimonials-track') as HTMLElement;
  const slides = carousel.querySelectorAll('.testimonial-slide');
  const prevBtn = carousel.querySelector('.prev-btn');
  const nextBtn = carousel.querySelector('.next-btn');
  const indicators = carousel.querySelectorAll('.indicator');
  
  let currentSlide = 0;
  const totalSlides = slides.length;
  
  function updateCarousel() {
    const translateX = -currentSlide * 100;
    track.style.transform = `translateX(${translateX}%)`;
    
    // تحديث المؤشرات
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentSlide);
    });
  }
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
  }
  
  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }
  
  // أحداث الأزرار
  nextBtn?.addEventListener('click', nextSlide);
  prevBtn?.addEventListener('click', prevSlide);
  
  // أحداث المؤشرات
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentSlide = index;
      updateCarousel();
    });
  });
  
  // تشغيل تلقائي
  setInterval(nextSlide, 5000);
}

function initHomeExtras(): void {
  // reveal on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
      const el = entry.target as HTMLElement;
      if (entry.isIntersecting) {
        el.classList.add('in-view');
      }
    });
  }, { threshold: 0.18 });

  document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

  // simple quote slider
  const slider = document.querySelector('.quote-slider');
  if (slider) {
    const quotes = Array.from(slider.querySelectorAll('.quote')) as HTMLElement[];
    let i = 0;
    setInterval(() => {
      quotes[i].classList.remove('active');
      i = (i + 1) % quotes.length;
      quotes[i].classList.add('active');
    }, 4200);
  }
}

export async function mountHome(root: HTMLElement) {
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

  // إضافة home extras
  frag.appendChild(createHomeExtras());

  // إضافة السكاشن العصرية الجديدة
  frag.appendChild(createStatsSection());
  frag.appendChild(createInteractiveServicesSection());
  frag.appendChild(createTestimonialsCarousel());

  // فوتر قياسي
  frag.appendChild(createFooter());

  root.appendChild(frag);

  // تهيئة الوظائف كما في الصفحة الرئيسية الأصلية
  initHeader();
  initHeroSlider();
  initFooter();

  // تهيئة مكون stacked
  initStacked();

  // تهيئة home extras
  initHomeExtras();

  // تهيئة السكاشن الجديدة
  initModernSections();

  // تهيئة الرسوم المتحركة للقسم المستقل
  await initStandaloneAnimations();
}

export default { mountHome };

