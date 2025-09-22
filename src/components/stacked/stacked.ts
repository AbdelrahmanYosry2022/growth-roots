/**
 * Stacked Component - Isolated and Reusable
 * مكون البطاقات المكدسة مع تأثيرات GSAP وإدارة الحالة
 */

import './stacked.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// تسجيل إضافة ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

/**
 * بيانات البطاقة
 */
export interface StackedCard {
  title: string;
  subtitle: string;
  imageUrl: string;
  imagePlaceholder?: string;
  layer: number;
}

/**
 * إعدادات المكون
 */
export interface StackedConfig {
  cards: StackedCard[];
  heroTitle?: string;
  cardVisibleAmount?: number;
  initialOffset?: number;
  enableProgressBar?: boolean;
}

/**
 * البيانات الافتراضية للبطاقات
 */
const DEFAULT_CARDS: StackedCard[] = [
  {
    title: 'تأسيس المصانع الجديدة',
    subtitle: 'الدعم الشامل من التخطيط حتى التشغيل',
    imageUrl: 'https://cdn.cosmos.so/ba8fd483-2042-47ed-a175-9c594fd538d1.jpeg',
    imagePlaceholder: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUQExMVFhUXGRgaGBgYGRkdGBoaGhgYGBgYGBgdHSggGBolHRgYITEhJSkrLi4uGh8zODMtNygtLisBCgoKDg0OGxAQGy0lICYtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIE/8QAGBABAAICAwAAAAAAAAAAAAAAAAECAwQF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdQAAAAAAAAAAAAAAAAAAAAAAAAD/2Q==',
    layer: 1
  },
  {
    title: 'توريد خطوط الإنتاج والمعدات',
    subtitle: 'أحدث خطوط الإنتاج بمعايير عالمية',
    imageUrl: 'https://cdn.cosmos.so/913696c4-07e0-40f3-b6c2-0c0e8a18559a.jpeg',
    imagePlaceholder: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUQExMVFhUXGRgaGBgYGRkdGBoaGhgYGBgYGBgdHSggGBolHRgYITEhJSkrLi4uGh8zODMtNygtLisBCgoKDg0OGxAQGy0lICYtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIE/8QAGBABAAICAwAAAAAAAAAAAAAAAAECAwQF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdQAAAAAAAAAAAAAAAAAAAAAAAAD/2Q==',
    layer: 2
  },
  {
    title: 'إدارة وتشغيل المصانع',
    subtitle: 'تشغيل وتحسين الكفاءة وتقليل الفاقد',
    imageUrl: 'https://cdn.cosmos.so/78f3c414-e013-4693-a02e-6bea74309e03.jpeg',
    imagePlaceholder: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUQExMVFhUXGRgaGBgYGRkdGBoaGhgYGBgYGBgdHSggGBolHRgYITEhJSkrLi4uGh8zODMtNygtLisBCgoKDg0OGxAQGy0lICYtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIE/8QAGBABAAICAwAAAAAAAAAAAAAAAAECAwQF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdQAAAAAAAAAAAAAAAAAAAAAAAAD/2Q==',
    layer: 3
  },
  {
    title: 'التدريب وبناء القدرات',
    subtitle: 'نقل الخبرات لضمان الاستدامة التشغيلية',
    imageUrl: 'https://cdn.cosmos.so/c7d7c0ef-c730-4192-9687-42606e554e7c.jpeg',
    imagePlaceholder: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUQExMVFhUXGRgaGBgYGRkdGBoaGhgYGBgYGBgdHSggGBolHRgYITEhJSkrLi4uGh8zODMtNygtLisBCgoKDg0OGxAQGy0lICYtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIE/8QAGBABAAICAwAAAAAAAAAAAAAAAAECAwQF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdQAAAAAAAAAAAAAAAAAAAAAAAAD/2Q==',
    layer: 4
  },
  {
    title: 'تطوير المنتجات',
    subtitle: 'ابتكار وتحسين التركيبات والوصفات',
    imageUrl: 'https://cdn.cosmos.so/69b9691f-921b-43ab-afbb-3237d65f67ad.jpeg',
    imagePlaceholder: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUQExMVFhUXGRgaGBgYGRkdGBoaGhgYGBgYGBgdHSggGBolHRgYITEhJSkrLi4uGh8zODMtNygtLisBCgoKDg0OGxAQGy0lICYtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIE/8QAGBABAAICAwAAAAAAAAAAAAAAAAECAwQF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdQAAAAAAAAAAAAAAAAAAAAAAAAD/2Q==',
    layer: 5
  }
];

/**
 * إنشاء عنصر الـ stacked
 * @param config - إعدادات المكون
 * @returns HTMLElement - عنصر الـ stacked
 */
export function createStacked(config: Partial<StackedConfig> = {}): HTMLElement {
  const {
    cards = DEFAULT_CARDS,
    heroTitle = 'نغطي دورة حياة المصنع الغذائي كاملة — من التأسيس والتشغيل إلى التطوير وإعادة الهيكلة المستدامة.'
  } = config;

  const section = document.createElement('section');
  section.id = 'stacked-cards';
  section.className = 'stacked-component';
  section.setAttribute('aria-labelledby', 'stacked-heading');
  
  // إنشاء HTML للبطاقات
  const cardsHTML = cards.map(card => `
    <div class="stack-card layer-${card.layer}">
      <div class="card-content">
        <h3 class="card-title">${card.title}</h3>
        <p class="card-subtitle">${card.subtitle}</p>
      </div>
      <div class="card-image-container">
        <span class="img-ph" aria-hidden="true"></span>
        <img loading="lazy" decoding="async" class="card-image" 
             src="${card.imagePlaceholder || ''}" 
             data-full="${card.imageUrl}" 
             alt="${card.title}">
      </div>
    </div>
  `).join('');
  
  section.innerHTML = `
    <div class="stacked-hero">
      <h2 id="stacked-heading">${heroTitle}</h2>
    </div>
    <div class="stacked-divider"></div>
    <div class="stacked-cards-container">
      ${cardsHTML}
    </div>
    <div style="height:60vh"></div>
  `;
  
  return section;
}

/**
 * متغيرات الحالة العامة
 */
let stackedInstance: any = null;
let progressElement: HTMLElement | null = null;

/**
 * تهيئة وظائف الـ stacked
 * يجب استدعاء هذه الدالة بعد إضافة الـ stacked للصفحة
 */
export function initStacked(): void {
  const cards = Array.from(document.querySelectorAll('.stacked-component .stack-card')) as HTMLElement[];
  if (!cards.length) return;

  // تم إزالة أزرار الأسهم بناءً على طلب المستخدم

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
 * تحديث محتوى البطاقات ديناميكياً
 */
export function updateStackedCards(newCards: StackedCard[]): void {
  const container = document.querySelector('.stacked-component .stacked-cards-container');
  if (!container) return;
  
  // إزالة البطاقات الحالية
  const existingCards = container.querySelectorAll('.stack-card');
  existingCards.forEach(card => card.remove());
  
  // إضافة البطاقات الجديدة
  const cardsHTML = newCards.map(card => `
    <div class="stack-card layer-${card.layer}">
      <div class="card-content">
        <h3 class="card-title">${card.title}</h3>
        <p class="card-subtitle">${card.subtitle}</p>
      </div>
      <div class="card-image-container">
        <span class="img-ph" aria-hidden="true"></span>
        <img loading="lazy" decoding="async" class="card-image" 
             src="${card.imagePlaceholder || ''}" 
             data-full="${card.imageUrl}" 
             alt="${card.title}">
      </div>
    </div>
  `).join('');
  
  container.innerHTML = cardsHTML;
  
  // إعادة تهيئة المكون
  initStacked();
}

/**
 * إزالة المكون من الصفحة
 */
export function removeStacked(): void {
  // تنظيف التأثيرات
  teardownDesktop();
  
  // إزالة العنصر
  const stackedComponent = document.querySelector('.stacked-component');
  if (stackedComponent) {
    stackedComponent.remove();
  }
  
  // إزالة شريط التقدم إذا كان منفصلاً
  if (progressElement && progressElement.parentNode === document.body) {
    progressElement.remove();
  }
  
  progressElement = null;
  stackedInstance = null;
}