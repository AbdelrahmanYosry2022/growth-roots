/**
 * Products & Solutions Component - Isolated and Reusable
 * مكون المنتجات والحلول مع واجهة برمجية واضحة
 */

import './productsSolutions.css';

/**
 * بيانات عنصر المنتج أو الحل
 */
export interface ProductSolutionItem {
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  variant: 'accent' | 'dark' | 'outline' | 'ghost' | 'accent-soft';
  modifier?: 'alt' | 'alt2' | 'alt3';
}

/**
 * إعدادات المكون
 */
export interface ProductsSolutionsConfig {
  title?: string;
  subtitle?: string;
  items?: ProductSolutionItem[];
  sectionId?: string;
}

/**
 * البيانات الافتراضية للمنتجات والحلول
 */
const DEFAULT_ITEMS: ProductSolutionItem[] = [
  {
    title: 'Ricatto',
    description: 'علامتنا لمكسبات الطعم والخامات التي تمنح منتجاتك ثبات الجودة.',
    linkText: 'دخول الكatalog →',
    linkUrl: '#',
    variant: 'accent'
  },
  {
    title: 'Kaya Steel',
    description: 'معدات وخطوط إنتاج بمعايير تصنيع دقيقة تدعم التوسع والتشغيل الذكي.',
    linkText: 'استعرض المعدات →',
    linkUrl: '#',
    variant: 'dark'
  },
  {
    title: 'حلول تكاملية',
    description: 'دمج الاستشارات بالتشغيل والتدريب وسلاسل الإمداد في منظومة واحدة.',
    linkText: 'اطلب خارطة طريق →',
    linkUrl: '#',
    variant: 'outline'
  },
  {
    title: 'تطوير منتجات',
    description: 'ابتكار وصفات وتحسين التركيبات وفق معايير الذوق والجودة.',
    linkText: 'ابدأ التطوير →',
    linkUrl: '#',
    variant: 'ghost'
  },
  {
    title: 'إدارة التشغيل',
    description: 'تحسين الأداء، ضبط الجودة، تقليل الفاقد، ورفع كفاءة النظم.',
    linkText: 'جلسة تقييم أولية →',
    linkUrl: '#',
    variant: 'dark',
    modifier: 'alt'
  },
  {
    title: 'التوريد والخامات',
    description: 'شبكة موثوقة لتوفير المواد اللازمة بمستويات ثبات عالية.',
    linkText: 'طلب عرض أسعار →',
    linkUrl: '#',
    variant: 'accent-soft'
  },
  {
    title: 'إعادة الهيكلة',
    description: 'حل تشوهات العمليات واستعادة الربحية والنمو المستدام.',
    linkText: 'خطّة إنقاذ →',
    linkUrl: '#',
    variant: 'outline',
    modifier: 'alt2'
  },
  {
    title: 'دعم المطاعم',
    description: 'تطوير المطابخ المركزية وتوحيد الجودة التشغيلية.',
    linkText: 'احجز جلسة →',
    linkUrl: '#',
    variant: 'ghost',
    modifier: 'alt3'
  }
];

/**
 * إنشاء عنصر منتج أو حل واحد
 * @param item - بيانات العنصر
 * @returns HTMLElement - عنصر HTML للمنتج أو الحل
 */
function createProductSolutionItem(item: ProductSolutionItem): HTMLElement {
  const itemElement = document.createElement('div');
  
  // تحديد الكلاسات
  let itemClasses = `products-solutions-item ${item.variant}`;
  if (item.modifier) {
    itemClasses += ` ${item.modifier}`;
  }
  
  itemElement.className = itemClasses;
  itemElement.innerHTML = `
    <div class="products-solutions-item-inner">
      <h4>${item.title}</h4>
      <p>${item.description}</p>
      <a href="${item.linkUrl}" class="products-solutions-link">${item.linkText}</a>
    </div>
  `;
  
  return itemElement;
}

/**
 * إنشاء مكون المنتجات والحلول
 * @param config - إعدادات المكون
 * @returns HTMLElement - عنصر المكون
 */
export function createProductsSolutions(config: ProductsSolutionsConfig = {}): HTMLElement {
  const {
    title = 'منتجاتنا وحلول الشراكات',
    subtitle = 'من الخامات ومكسبات الطعم إلى خطوط الإنتاج المتكاملة والشراكات التقنية.',
    items = DEFAULT_ITEMS,
    sectionId = 'products'
  } = config;

  const section = document.createElement('section');
  section.id = sectionId;
  section.className = 'products-solutions-component';
  section.setAttribute('aria-labelledby', `${sectionId}-heading`);
  
  // إنشاء الحاوي الرئيسي
  const container = document.createElement('div');
  container.className = 'products-solutions-container';
  
  // إنشاء الهيدر
  const header = document.createElement('div');
  header.className = 'products-solutions-header';
  header.innerHTML = `
    <h3 id="${sectionId}-heading" class="products-solutions-title">${title}</h3>
    <p class="products-solutions-subtitle">${subtitle}</p>
  `;
  
  // إنشاء الشبكة
  const grid = document.createElement('div');
  grid.className = 'products-solutions-grid';
  
  // إضافة العناصر للشبكة
  items.forEach(item => {
    const itemElement = createProductSolutionItem(item);
    grid.appendChild(itemElement);
  });
  
  // تجميع العناصر
  container.appendChild(header);
  container.appendChild(grid);
  section.appendChild(container);
  
  return section;
}

/**
 * تهيئة مكون المنتجات والحلول
 * يمكن استدعاء هذه الدالة لإضافة تفاعلات إضافية
 */
export function initProductsSolutions(): void {
  const component = document.querySelector('.products-solutions-component');
  if (!component) return;
  
  // إضافة تتبع النقرات على الروابط
  const links = component.querySelectorAll('.products-solutions-link');
  links.forEach(link => {
    link.addEventListener('click', (event) => {
      const href = (event.target as HTMLAnchorElement).getAttribute('href');
      
      // منع الانتقال للروابط الفارغة أو التي تحتوي على #
      if (href === '#' || !href) {
        event.preventDefault();
        console.log('Product/Solution link clicked:', (event.target as HTMLAnchorElement).textContent);
        // يمكن إضافة منطق مخصص هنا (مثل فتح نافذة منبثقة أو إرسال تحليلات)
      }
    });
  });
  
  // إضافة تأثيرات التمرير المحسنة
  const items = component.querySelectorAll('.products-solutions-item');
  items.forEach(item => {
    const htmlItem = item as HTMLElement;
    htmlItem.addEventListener('mouseenter', () => {
      htmlItem.style.setProperty('--hover-scale', '1.02');
    });
    
    htmlItem.addEventListener('mouseleave', () => {
      htmlItem.style.removeProperty('--hover-scale');
    });
  });
}

/**
 * تحديث محتوى المكون ديناميكياً
 * @param newItems - العناصر الجديدة
 */
export function updateProductsSolutions(newItems: ProductSolutionItem[]): void {
  const grid = document.querySelector('.products-solutions-component .products-solutions-grid');
  if (!grid) return;
  
  // إزالة العناصر الحالية
  grid.innerHTML = '';
  
  // إضافة العناصر الجديدة
  newItems.forEach(item => {
    const itemElement = createProductSolutionItem(item);
    grid.appendChild(itemElement);
  });
  
  // إعادة تهيئة التفاعلات
  initProductsSolutions();
}

/**
 * إزالة المكون من الصفحة
 */
export function removeProductsSolutions(): void {
  const component = document.querySelector('.products-solutions-component');
  if (component) {
    component.remove();
  }
}

/**
 * الحصول على بيانات المكون الحالية
 * @returns ProductSolutionItem[] - قائمة العناصر الحالية
 */
export function getProductsSolutionsData(): ProductSolutionItem[] {
  const items = document.querySelectorAll('.products-solutions-component .products-solutions-item');
  const data: ProductSolutionItem[] = [];
  
  items.forEach(item => {
    const title = item.querySelector('h4')?.textContent || '';
    const description = item.querySelector('p')?.textContent || '';
    const link = item.querySelector('.products-solutions-link') as HTMLAnchorElement;
    const linkText = link?.textContent || '';
    const linkUrl = link?.getAttribute('href') || '#';
    
    // استخراج النوع والمعدل من الكلاسات
    const classList = Array.from(item.classList);
    let variant: ProductSolutionItem['variant'] = 'dark';
    let modifier: ProductSolutionItem['modifier'] | undefined;
    
    if (classList.includes('accent')) {
      variant = classList.includes('soft') ? 'accent-soft' : 'accent';
    } else if (classList.includes('outline')) {
      variant = 'outline';
    } else if (classList.includes('ghost')) {
      variant = 'ghost';
    }
    
    if (classList.includes('alt')) modifier = 'alt';
    else if (classList.includes('alt2')) modifier = 'alt2';
    else if (classList.includes('alt3')) modifier = 'alt3';
    
    data.push({
      title,
      description,
      linkText,
      linkUrl,
      variant,
      modifier
    });
  });
  
  return data;
}