// صفحة من نحن (About)
import { createHeader, initHeader } from '../../components/header/header';
import { createFooter, initFooter } from '../../components/footer/footer';
import { createHeroSection, initHeroSection } from '../../components/heroSection/heroSection';
import './about.css';

function createAboutHero(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'about-hero';
  section.innerHTML = `
    <div class="decor" aria-hidden="true">
      <span class="blob b1"></span>
      <span class="blob b2"></span>
      <span class="ring r1"></span>
      <span class="ring r2"></span>
      <span class="noise"></span>
    </div>
    <div class="container">

<div class="hero-badge">
          <svg class="badge-icon" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
          </svg>
          <span>الرائدون في الصناعات الغذائية</span>
        </div>




        <div class="hero-title">
          <h1>
            <span class="title-line-1">نحن <span class="title-highlight">جروث روتس</span></span>
            <span class="title-line-2">نبني المستقبل الصناعي</span>
          </h1>
        </div>

        <p class="hero-description">
          من الفكرة إلى الإنتاج، نقدم حلولاً متكاملة لتأسيس وتطوير المصانع الغذائية
          بأعلى معايير الجودة والكفاءة التشغيلية.
        </p>


        
 <div class="hero-features" display="flex">
          <div class="feature-item">
            <svg class="feature-icon" viewBox="0 0 24 24" fill="none">
              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>خبرة 15+ سنة</span>
          </div>
          <div class="feature-item">
            <svg class="feature-icon" viewBox="0 0 24 24" fill="none">
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>حلول مبتكرة</span>
          </div>
          <div class="feature-item">
            <svg class="feature-icon" viewBox="0 0 24 24" fill="none">
              <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>فريق متخصص</span>
          </div>
        </div>

        

      <div class="hero-actions">
          <button class="btn-primary">
            <span>استكشف خدماتنا</span>
            <svg class="btn-arrow" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button class="btn-secondary">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none">
              <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>تواصل معنا</span>
          </button>
        </div>

    </div>
  `;
  // Build a new hero section using the shared heroSection template
  const temp = document.createElement('div');
  temp.innerHTML = createHeroSection();
  const newHero = temp.firstElementChild as HTMLElement;

  // Move About's hero textual content into the new hero's text area
  const aboutText = section.querySelector('.hero-content')?.innerHTML || '';
  const aboutImage = section.querySelector('.hero-image')?.innerHTML || '';

  const targetTextSection = newHero.querySelector('.hero-text-section');
  if (targetTextSection) {
    targetTextSection.innerHTML = aboutText;
  }

  const targetVisual = newHero.querySelector('.hero-visual-section');
  if (targetVisual) {
    // Ensure visual section contains the same image markup
    if (aboutImage) targetVisual.innerHTML = aboutImage;
  }

  // Initialize animations for the new hero after it's mounted
  setTimeout(() => initHeroSection(), 0);

  // Return a container that places the new hero above the original about-hero
  const container = document.createElement('div');
  container.appendChild(newHero);
  container.appendChild(section);
  return container;
}

function createExpertise(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'about-expertise';
  section.id = 'expertise';
  section.innerHTML = `
    <div class="container">
      <h2>خبراتنا الأساسية</h2>
      <div class="grid">
        <div class="tile tilt-card">
          <span class="ms">architecture</span>
          <h3>دراسات وتخطيط</h3>
          <p>تحويل الرؤية إلى مخطط تشغيلي فعال ومسارات تدفق محسّنة.</p>
        </div>
        <div class="tile tilt-card">
          <span class="ms">precision_manufacturing</span>
          <h3>تجهيز المعدات</h3>
          <p>توريد وتركيب خطوط إنتاج موثوقة للمصانع الغذائية.</p>
        </div>
        <div class="tile tilt-card">
          <span class="ms">settings_suggest</span>
          <h3>التشغيل والإطلاق</h3>
          <p>تشغيل مستقر ورفع جاهزية الفرق وإعداد الإجراءات.</p>
        </div>
        <div class="tile tilt-card">
          <span class="ms">stacks</span>
          <h3>تطوير المنتجات</h3>
          <p>صياغة وصفات وتقنيات تصنيع تناسب السوق والتكلفة.</p>
        </div>
        <div class="tile tilt-card">
          <span class="ms">verified</span>
          <h3>الجودة والسلامة</h3>
          <p>أنظمة HACCP وISO لضبط الجودة وتقليل المخاطر.</p>
        </div>
        <div class="tile tilt-card">
          <span class="ms">auto_graph</span>
          <h3>التحسين المستمر</h3>
          <p>قياس الأداء والتحسين لزيادة الكفاءة وتقليل الهدر.</p>
        </div>
      </div>
    </div>
  `;
  return section;
}

function createValues(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'about-values';
  section.innerHTML = `
    <div class="container">
      <h2>قيمنا التي نعمل بها</h2>
      <div class="grid">
        <div class="card tilt-card">
          <span class="icon">verified</span>
          <h3>جودة بلا مساومة</h3>
          <p>نضع معايير الجودة والسلامة الغذائية في قلب كل قرار وتصميم وتنفيذ.</p>
        </div>
        <div class="card tilt-card">
          <span class="icon">auto_awesome</span>
          <h3>ابتكار عملي</h3>
          <p>حلول قابلة للتطبيق ترفع الكفاءة وتخفض الهدر وتزيد الإنتاجية.</p>
        </div>
        <div class="card tilt-card">
          <span class="icon">handshake</span>
          <h3>شراكة طويلة المدى</h3>
          <p>نلتزم بنجاحك التشغيلي على المدى الطويل، لا مجرد تسليم مشروع.</p>
        </div>
        <div class="card tilt-card">
          <span class="icon">precision_manufacturing</span>
          <h3>هندسة دقيقة</h3>
          <p>تصميم تدفقات العمل وخطوط الإنتاج بعناية لضمان سلاسة التشغيل.</p>
        </div>
      </div>
    </div>
  `;
  return section;
}

function createStats(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'about-stats';
  section.innerHTML = `
    <div class="container">
      <div class="stats-header">
        <h2>إنجازاتنا بالأرقام</h2>
        <p>نفخر بما حققناه من نجاحات مع شركائنا في رحلة التميز الصناعي</p>
      </div>
      <div class="stats-grid">
        <div class="stat-card reveal">
          <div class="stat-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M19 21V5C19 4.46957 18.7893 3.96086 18.4142 3.58579C18.0391 3.21071 17.5304 3 17 3H7C6.46957 3 5.96086 3.21071 5.58579 3.58579C5.21071 3.96086 5 4.46957 5 5V21L12 17L19 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="stat-content">
            <strong data-target="50" data-suffix="+">0+</strong>
            <span>مشروع ناجح</span>
          </div>
        </div>
        <div class="stat-card reveal">
          <div class="stat-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="stat-content">
            <strong data-target="15" data-suffix="+">0+</strong>
            <span>سنة خبرة</span>
          </div>
        </div>
        <div class="stat-card reveal">
          <div class="stat-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M20 8V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4H13C12.4696 4 11.9609 4.21071 11.5858 4.58579C11.2107 4.96086 11 5.46957 11 6V8C11 8.53043 11.2107 9.03914 11.5858 9.41421C11.9609 9.78929 12.4696 10 13 10H18C18.5304 10 19.0391 9.78929 19.4142 9.41421C19.7893 9.03914 20 8.53043 20 8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="stat-content">
            <strong data-target="200" data-suffix="+">0+</strong>
            <span>عميل راضٍ</span>
          </div>
        </div>
        <div class="stat-card reveal">
          <div class="stat-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="stat-content">
            <strong data-target="100" data-suffix="%">0%</strong>
            <span>معدل النجاح</span>
          </div>
        </div>
      </div>
    </div>
  `;
  return section;
}

function createStory(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'about-story';
  section.innerHTML = `
    <div class="container">
      <div class="story-grid">
        <div class="story-content reveal">
          <div class="story-badge">
            <svg class="badge-icon" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L13.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>رحلة التميز</span>
          </div>
          <h2>قصة نجاح تمتد لأكثر من 15 عاماً</h2>
          <div class="story-timeline">
            <div class="timeline-item">
              <div class="timeline-year">2008</div>
              <div class="timeline-content">
                <h4>البداية الطموحة</h4>
                <p>انطلقنا برؤية واضحة لتطوير حلول مبتكرة للصناعات الغذائية تجمع بين التقنية المتقدمة والخبرة العملية</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-year">2015</div>
              <div class="timeline-content">
                <h4>التوسع والنمو</h4>
                <p>أصبحنا شريكاً موثوقاً للعديد من الشركات الرائدة في المنطقة مع تطوير فريق متخصص من المهندسين والخبراء</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-year">2024</div>
              <div class="timeline-content">
                <h4>الريادة والابتكار</h4>
                <p>نواصل تقديم حلول مخصصة تتجاوز توقعات عملائنا مع ضمان أعلى معايير الجودة والكفاءة في كل مشروع</p>
              </div>
            </div>
          </div>
          <div class="story-values">
            <div class="value-item">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>الجودة والتميز</span>
            </div>
            <div class="value-item">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>الابتكار المستمر</span>
            </div>
            <div class="value-item">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M17 21V13H7V21M7 13L17 13L12 8L7 13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>الشراكة الحقيقية</span>
            </div>
          </div>
        </div>
        <div class="story-visual reveal">
          <div class="visual-container">
            <div class="floating-element element-1">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="floating-element element-2">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="floating-element element-3">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="main-visual">
              <div class="visual-circle">
                <div class="inner-circle">
                  <span class="year-text">15+</span>
                  <span class="year-label">سنة نجاح</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  return section;
}

export async function mountAbout(root: HTMLElement) {
  const frag = document.createDocumentFragment();

  // Header
  frag.appendChild(createHeader());

  // Content
  frag.appendChild(createAboutHero());
  frag.appendChild(createExpertise());
  frag.appendChild(createValues());
  frag.appendChild(createStats());
  frag.appendChild(createStory());

  // Footer
  frag.appendChild(createFooter());

  root.appendChild(frag);

  // Init
  initHeader();
  initFooter();

  // Enhance interactions
  initTiltCards();
  initRevealOnScroll();
  initCountUpStats();
}

// ========== Interactions ==========
function initTiltCards(){
  const cards = document.querySelectorAll<HTMLElement>('.tilt-card');
  cards.forEach(card=>{
    const onMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rx = ((y / rect.height) - 0.5) * -10;
      const ry = ((x / rect.width) - 0.5) * 10;
      card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
    };
    const onLeave = () => {
      card.style.transform = '';
    };
    card.addEventListener('mousemove', onMove);
    card.addEventListener('mouseleave', onLeave);
  });
}

function initRevealOnScroll(){
  const items = document.querySelectorAll<HTMLElement>('.reveal');
  const io = new IntersectionObserver((entries, obs)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(el=> io.observe(el));
}

function initCountUpStats(){
  const stats = document.querySelectorAll<HTMLDivElement>('.about-stats .stat');
  const run = (el: HTMLElement) => {
    const strong = el.querySelector('strong');
    if(!strong) return;
    const target = Number(strong.getAttribute('data-target') || '0');
    const suffix = strong.getAttribute('data-suffix') || '';
    let start = 0;
    const dur = 1400; // ms
    const t0 = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      const ease = 1 - Math.pow(1 - p, 3);
      const val = Math.floor(start + (target - start) * ease);
      strong.textContent = `${val}${suffix}`;
      if(p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const io = new IntersectionObserver((entries, obs)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        run(entry.target as HTMLElement);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.35 });
  stats.forEach(el=> io.observe(el));
}

export default { mountAbout };
