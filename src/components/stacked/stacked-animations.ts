import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// تسجيل إضافة ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// متغيرات عامة للانيميشن
let stackedInstance: any = null;
let progressElement: HTMLElement | null = null;

/**
 * تهيئة وظائف الـ stacked
 * يجب استدعاء هذه الدالة بعد إضافة الـ stacked للصفحة
 */
export function initStackedAnimations(): void {
  const cards = Array.from(document.querySelectorAll('.stacked-component .stack-card')) as HTMLElement[];
  if (!cards.length) return;

  // تحسين تحميل الصور (LQIP)
  setupImageLoading(cards);
  
  // إعداد شريط التقدم
  setupProgressBar();
  
  // إعداد التأثيرات والتفاعل
  setupAnimations(cards);
}

/**
 * إعداد تحميل الصور مع العناصر النائبة
 */
function setupImageLoading(cards: HTMLElement[]): void {
  cards.forEach(card => {
    const img = card.querySelector<HTMLImageElement>('.card-image');
    if (!img) return;
    
    const fullImageUrl = img.getAttribute('data-full');
    if (fullImageUrl) {
      requestAnimationFrame(() => {
        img.src = fullImageUrl;
      });
    }
    
    if (img.complete) {
      img.classList.add('loaded');
      card.querySelector('.img-ph')?.remove();
    } else {
      img.addEventListener('load', () => {
        img.classList.add('loaded');
        card.querySelector('.img-ph')?.remove();
      });
      
      img.addEventListener('error', () => {
        card.querySelector('.img-ph')?.classList.add('error');
      });
    }
  });
}

/**
 * إعداد شريط التقدم
 */
function setupProgressBar(): void {
  progressElement = document.querySelector<HTMLElement>('.stacked-component .stack-progress');
  
  if (!progressElement) {
    progressElement = document.createElement('div');
    progressElement.className = 'stack-progress';
    progressElement.setAttribute('role', 'progressbar');
    progressElement.setAttribute('aria-valuemin', '0');
    progressElement.setAttribute('aria-valuemax', '100');
    progressElement.setAttribute('aria-label', 'تقدم استعراض البطاقات');
    progressElement.innerHTML = '<span></span>';
    
    // إضافة شريط التقدم للمكون بدلاً من body
    const stackedComponent = document.querySelector('.stacked-component');
    if (stackedComponent) {
      stackedComponent.appendChild(progressElement);
    }
  }
}

/**
 * إعداد التأثيرات والتفاعل
 */
function setupAnimations(cards: HTMLElement[]): void {
  const isMobile = () => window.matchMedia('(max-width:900px)').matches;
  
  function handleMode() {
    if (isMobile()) {
      teardownDesktop();
      if (progressElement) progressElement.style.display = 'none';
      setupMobileInteraction();
    } else {
      if (progressElement) {
        progressElement.style.display = 'block';
        progressElement.style.opacity = '0';
      }
      setupDesktop(cards);
    }
  }
  
  handleMode();
  window.addEventListener('resize', handleMode);
}

/**
 * إعداد التأثيرات للشاشات الكبيرة
 */
function setupDesktop(cards: HTMLElement[]): void {
  const cardVisibleAmount = 180;
  const initialOffset = 520;
  const timeline = gsap.timeline();
  
  // تعيين حجم الصور الأولي
  gsap.set('.stacked-component .stack-card .card-image', { scale: 1.15 });
  
  cards.forEach((card, index) => {
    if (index > 0) {
      gsap.set(card, { y: index * initialOffset });
      timeline.to(card, { 
        y: index * cardVisibleAmount, 
        duration: index * 0.45, 
        ease: 'none' 
      }, 0)
      .to(card.querySelector('.card-image'), { 
        scale: 1, 
        duration: 0.5, 
        ease: 'none' 
      }, 0);
    } else {
      gsap.set(card, { y: 0 });
      timeline.to(card.querySelector('.card-image'), { 
        scale: 1, 
        duration: 0.5, 
        ease: 'none' 
      }, 0);
    }
  });
  
  stackedInstance = ScrollTrigger.create({
    trigger: '.stacked-component .stacked-cards-container',
    start: 'top top',
    pin: true,
    end: `+=${cards.length * initialOffset}`,
    scrub: true,
    animation: timeline,
    onEnter: () => {
      if (progressElement) progressElement.style.opacity = '1';
    },
    onEnterBack: () => {
      if (progressElement) progressElement.style.opacity = '1';
    },
    onLeave: () => {
      if (progressElement) progressElement.style.opacity = '0';
    },
    onLeaveBack: () => {
      if (progressElement) progressElement.style.opacity = '0';
    },
    onUpdate: (self: any) => {
      if (progressElement) {
        const bar = progressElement.querySelector('span') as HTMLElement;
        if (bar) {
          const percentage = self.progress * 100;
          bar.style.height = percentage + '%';
          progressElement.setAttribute('aria-valuenow', String(Math.round(percentage)));
        }
      }
    }
  });
  
  if (progressElement) {
    progressElement.style.transition = 'opacity 0.35s ease';
  }
}

/**
 * إزالة تأثيرات الشاشات الكبيرة
 */
function teardownDesktop(): void {
  if (stackedInstance) {
    stackedInstance.kill();
    stackedInstance = null;
  }
  
  const cards = document.querySelectorAll('.stacked-component .stack-card') as NodeListOf<HTMLElement>;
  cards.forEach(card => {
    card.style.transform = '';
  });
  
  if (progressElement) {
    const bar = progressElement.querySelector('span') as HTMLElement;
    if (bar) bar.style.height = '0%';
  }
}

/**
 * إعداد التفاعل للأجهزة المحمولة
 */
function setupMobileInteraction(): void {
  const container = document.querySelector('.stacked-component .stacked-cards-container') as HTMLElement;
  if (!container) return;
  
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;
  
  container.addEventListener('pointerdown', (e: any) => {
    isDown = true;
    startX = e.pageX;
    scrollLeft = container.scrollLeft;
    container.style.cursor = 'grabbing';
  });
  
  window.addEventListener('pointerup', () => {
    isDown = false;
    container.style.cursor = '';
  });
  
  window.addEventListener('pointerleave', () => {
    isDown = false;
    container.style.cursor = '';
  });
  
  container.addEventListener('pointermove', (e: any) => {
    if (!isDown) return;
    const deltaX = e.pageX - startX;
    container.scrollLeft = scrollLeft - deltaX;
  });
}

/**
 * إزالة المكون من الصفحة
 */
export function removeStackedAnimations(): void {
  // تنظيف التأثيرات
  teardownDesktop();
  
  // إزالة شريط التقدم إذا كان منفصلاً
  if (progressElement && progressElement.parentNode === document.body) {
    progressElement.remove();
  }
  
  progressElement = null;
  stackedInstance = null;
}

/**
 * إعادة تهيئة الانيميشن بعد تحديث البطاقات
 */
export function reinitializeAnimations(): void {
  removeStackedAnimations();
  initStackedAnimations();
}