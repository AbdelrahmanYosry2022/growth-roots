/**
 * Stacked Component - Structure and Data
 * الهيكل الأساسي والبيانات للمكون
 */

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
export const DEFAULT_CARDS: StackedCard[] = [
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
 * إنشاء الهيكل الأساسي للمكون
 */
export function createStackedStructure(config: Partial<StackedConfig> = {}): HTMLElement {
  const {
    cards = DEFAULT_CARDS,
    cardVisibleAmount = 4,
    initialOffset = 0
  } = config;

  const stackedComponent = document.createElement('div');
  stackedComponent.className = 'stacked-component';
  
  stackedComponent.innerHTML = `
    <div class="stacked-cards-container">
      ${cards.map((card, index) => `
        <div class="stack-card layer-${card.layer}" data-index="${index}">
          <div class="card-content">
            <h2 class="card-title">${card.title}</h2>
            <p class="card-subtitle">${card.subtitle}</p>
          </div>
          <div class="card-image-container">
            ${card.imagePlaceholder ? `<div class="img-ph" style="background-image: url('${card.imagePlaceholder}')"></div>` : ''}
            <img class="card-image" src="${card.imageUrl}" alt="${card.title}" loading="lazy" />
          </div>
        </div>
      `).join('')}
    </div>
    <div class="stacked-progress-bar" style="display: none;">
      <div class="progress-fill"></div>
    </div>
  `;

  return stackedComponent;
}

/**
 * الحصول على عناصر البطاقات من الحاوية
 */
export function getStackedCards(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll('.stack-card'));
}

/**
 * إنشاء HTML للبطاقات
 */
export function createCardsHTML(cards: StackedCard[]): string {
  return cards.map((card, index) => `
    <div class="stack-card layer-${card.layer}" data-index="${index}">
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
}

/**
 * الحصول على شريط التقدم
 */
export function getProgressBar(container: HTMLElement): HTMLElement | null {
  return container.querySelector('.stacked-progress-bar');
}