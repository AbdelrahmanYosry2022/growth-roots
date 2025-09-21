import './services.css';

/**
 * Services Component - Isolated and Reusable
 * مكون الخدمات مع واجهة برمجية واضحة
 */

/**
 * بيانات خدمة واحدة
 */
export interface ServiceItem {
  title: string;
  description: string;
  icon?: string;
  link?: string;
}

/**
 * إعدادات المكون
 */
export interface ServicesConfig {
  title?: string;
  subtitle?: string;
  services?: ServiceItem[];
  ctaText?: string;
  ctaLink?: string;
  sectionId?: string;
}

/**
 * البيانات الافتراضية للخدمات
 */
const DEFAULT_SERVICES: ServiceItem[] = [
  {
    title: 'تأسيس المصانع',
    description: 'من الفكرة إلى التشغيل الكامل بخطط مدروسة وتنفيذ انسيابي.',
    link: '#factory-establishment'
  },
  {
    title: 'توريد المعدات',
    description: 'خطوط إنتاج ومعدات بمعايير جودة دولية وشراكات موثوقة.',
    link: '#equipment-supply'
  },
  {
    title: 'إدارة التشغيل',
    description: 'تشغيل وتحسين الأداء وتقليل الفاقد وتحسين الربحية.',
    link: '#operation-management'
  },
  {
    title: 'التدريب وبناء القدرات',
    description: 'رفع كفاءة الفرق لضمان استدامة جودة المنتج.',
    link: '#training-development'
  },
  {
    title: 'تطوير المنتجات',
    description: 'ابتكار وصفات وتحسين منتجات لملاءمة السوق.',
    link: '#product-development'
  },
  {
    title: 'توريد الخامات',
    description: 'مكسبات طعم وخامات عالية الجودة تحت Ricatto.',
    link: '#raw-materials'
  },
  {
    title: 'إعادة الهيكلة',
    description: 'حل مشكلات المصانع المتعثرة ورفع الكفاءة والإنتاجية.',
    link: '#restructuring'
  },
  {
    title: 'دعم المطاعم',
    description: 'تحسين الجودة التشغيلية وتطوير المطابخ المركزية.',
    link: '#restaurant-support'
  }
];

/**
 * إنشاء بطاقة خدمة واحدة
 * @param service - بيانات الخدمة
 * @returns HTMLElement - عنصر HTML للخدمة
 */
function createServiceCard(service: ServiceItem): HTMLElement {
  const card = document.createElement('div');
  card.className = 'services-card';
  
  // إضافة خصائص إمكانية الوصول
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', `خدمة ${service.title}: ${service.description}`);
  
  // إنشاء المحتوى
  const title = document.createElement('h4');
  title.className = 'services-card-title';
  title.textContent = service.title;
  
  const description = document.createElement('p');
  description.className = 'services-card-description';
  description.textContent = service.description;
  
  card.appendChild(title);
  card.appendChild(description);
  
  // إضافة معالج النقر إذا كان هناك رابط
  if (service.link) {
    card.addEventListener('click', () => {
      if (service.link === '#' || !service.link) {
        console.log('Service clicked:', service.title);
        // يمكن إضافة منطق مخصص هنا
      } else {
        window.location.href = service.link;
      }
    });
    
    // دعم لوحة المفاتيح
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        card.click();
      }
    });
  }
  
  return card;
}

/**
 * إنشاء مكون الخدمات
 * @param config - إعدادات المكون
 * @returns HTMLElement - عنصر المكون
 */
export function createServices(config: ServicesConfig = {}): HTMLElement {
  const {
    title = 'حلولنا وخدماتنا',
    subtitle = 'نغطي دورة إنشاء وتشغيل وتطوير مصنع الغذاء بالكامل عبر حزمة خدمات مترابطة تدعم النمو والاستدامة.',
    services = DEFAULT_SERVICES,
    ctaText = 'استعرض كل الخدمات →',
    ctaLink = '#',
    sectionId = 'solutions'
  } = config;

  const section = document.createElement('section');
  section.id = sectionId;
  section.className = 'services-component';
  section.setAttribute('aria-labelledby', `${sectionId}-heading`);
  
  // إنشاء الهيدر
  const header = document.createElement('div');
  header.className = 'services-header';
  
  const titleElement = document.createElement('h3');
  titleElement.id = `${sectionId}-heading`;
  titleElement.className = 'services-title';
  titleElement.textContent = title;
  
  const subtitleElement = document.createElement('p');
  subtitleElement.className = 'services-subtitle';
  subtitleElement.textContent = subtitle;
  
  header.appendChild(titleElement);
  header.appendChild(subtitleElement);
  
  // إنشاء الشبكة
  const grid = document.createElement('div');
  grid.className = 'services-grid';
  
  // إضافة الخدمات للشبكة
  services.forEach(service => {
    const serviceCard = createServiceCard(service);
    grid.appendChild(serviceCard);
  });
  
  // إنشاء زر الدعوة للعمل
  const ctaWrapper = document.createElement('div');
  ctaWrapper.className = 'services-cta-wrapper';
  
  const ctaButton = document.createElement('a');
  ctaButton.href = ctaLink;
  ctaButton.className = 'services-cta-button';
  ctaButton.textContent = ctaText;
  ctaButton.setAttribute('aria-label', 'استعرض جميع الخدمات المتاحة');
  
  // منع الانتقال للروابط الفارغة
  if (ctaLink === '#' || !ctaLink) {
    ctaButton.addEventListener('click', (event) => {
      event.preventDefault();
      console.log('Services CTA clicked');
      // يمكن إضافة منطق مخصص هنا
    });
  }
  
  ctaWrapper.appendChild(ctaButton);
  
  // تجميع العناصر
  section.appendChild(header);
  section.appendChild(grid);
  section.appendChild(ctaWrapper);
  
  return section;
}

/**
 * تهيئة مكون الخدمات
 * يمكن استدعاء هذه الدالة لإضافة تفاعلات إضافية
 */
export function initServices(): void {
  const component = document.querySelector('.services-component');
  if (!component) return;
  
  // إضافة تأثيرات التمرير المحسنة
  const cards = component.querySelectorAll('.services-card');
  cards.forEach(card => {
    const htmlCard = card as HTMLElement;
    
    htmlCard.addEventListener('mouseenter', () => {
      htmlCard.style.setProperty('--hover-scale', '1.02');
    });
    
    htmlCard.addEventListener('mouseleave', () => {
      htmlCard.style.removeProperty('--hover-scale');
    });
  });
  
  // إضافة تتبع التفاعل مع الخدمات
  const ctaButton = component.querySelector('.services-cta-button');
  if (ctaButton) {
    ctaButton.addEventListener('click', () => {
      console.log('Services: CTA button clicked');
      // يمكن إضافة تحليلات أو منطق مخصص هنا
    });
  }
  
  // إضافة دعم لوحة المفاتيح للتنقل
  cards.forEach((card, index) => {
    const htmlCard = card as HTMLElement;
    htmlCard.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        event.preventDefault();
        const nextCard = cards[index + 1] as HTMLElement;
        if (nextCard) {
          nextCard.focus();
        }
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault();
        const prevCard = cards[index - 1] as HTMLElement;
        if (prevCard) {
          prevCard.focus();
        }
      }
    });
  });
}

/**
 * تحديث محتوى المكون ديناميكياً
 * @param newServices - الخدمات الجديدة
 */
export function updateServices(newServices: ServiceItem[]): void {
  const grid = document.querySelector('.services-component .services-grid');
  if (!grid) return;
  
  // إزالة الخدمات الحالية
  grid.innerHTML = '';
  
  // إضافة الخدمات الجديدة
  newServices.forEach(service => {
    const serviceCard = createServiceCard(service);
    grid.appendChild(serviceCard);
  });
  
  // إعادة تهيئة التفاعلات
  initServices();
}

/**
 * إزالة المكون من الصفحة
 */
export function removeServices(): void {
  const component = document.querySelector('.services-component');
  if (component) {
    component.remove();
  }
}

/**
 * الحصول على بيانات المكون الحالية
 * @returns ServiceItem[] - قائمة الخدمات الحالية
 */
export function getServicesData(): ServiceItem[] {
  const cards = document.querySelectorAll('.services-component .services-card');
  const data: ServiceItem[] = [];
  
  cards.forEach(card => {
    const title = card.querySelector('.services-card-title')?.textContent || '';
    const description = card.querySelector('.services-card-description')?.textContent || '';
    
    data.push({
      title,
      description
    });
  });
  
  return data;
}

/**
 * تحديث نص الدعوة للعمل
 * @param newText - النص الجديد
 * @param newLink - الرابط الجديد (اختياري)
 */
export function updateServicesCTA(newText: string, newLink?: string): void {
  const ctaButton = document.querySelector('.services-component .services-cta-button') as HTMLAnchorElement;
  if (!ctaButton) return;
  
  ctaButton.textContent = newText;
  if (newLink) {
    ctaButton.href = newLink;
  }
}

/**
 * تحديث عنوان ووصف المكون
 * @param newTitle - العنوان الجديد
 * @param newSubtitle - الوصف الجديد
 */
export function updateServicesHeader(newTitle: string, newSubtitle: string): void {
  const titleElement = document.querySelector('.services-component .services-title');
  const subtitleElement = document.querySelector('.services-component .services-subtitle');
  
  if (titleElement) {
    titleElement.textContent = newTitle;
  }
  
  if (subtitleElement) {
    subtitleElement.textContent = newSubtitle;
  }
}