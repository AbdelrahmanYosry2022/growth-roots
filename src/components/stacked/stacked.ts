/**
 * Stacked Component - Isolated and Reusable
 * مكون البطاقات المكدسة مع تأثيرات GSAP وإدارة الحالة
 */

// استيراد الملفات المنفصلة
import './stacked.css';
import { 
  StackedCard, 
  StackedConfig, 
  createStackedStructure, 
  getStackedCards, 
  getProgressBar,
  createCardsHTML 
} from './stacked-structure';
import { 
  initStackedAnimations, 
  removeStackedAnimations, 
  reinitializeAnimations 
} from './stacked-animations';

// إعادة تصدير الواجهات للاستخدام الخارجي
export type { StackedCard, StackedConfig };

/**
 * إنشاء عنصر الـ stacked
 * @param config - إعدادات المكون
 * @returns HTMLElement - عنصر الـ stacked
 */
export function createStacked(config: Partial<StackedConfig> = {}): HTMLElement {
  return createStackedStructure(config);
}

/**
 * تهيئة وظائف الـ stacked
 * يجب استدعاء هذه الدالة بعد إضافة الـ stacked للصفحة
 */
export function initStacked(): void {
  initStackedAnimations();
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
  
  // إضافة البطاقات الجديدة باستخدام دالة من ملف الهيكل
  const cardsHTML = createCardsHTML(newCards);
  container.innerHTML = cardsHTML;
  
  // إعادة تهيئة المكون
  reinitializeAnimations();
}

/**
 * إزالة المكون من الصفحة
 */
export function removeStacked(): void {
  // تنظيف التأثيرات
  removeStackedAnimations();
  
  // إزالة العنصر
  const stackedComponent = document.querySelector('.stacked-component');
  if (stackedComponent) {
    stackedComponent.remove();
  }
}