// تصدير المكون الرئيسي
export {
  createVisualShowcase,
  initVisualShowcase,
  removeVisualShowcase,
  getVisualShowcaseInstance,
  VisualShowcaseInstance,
  type VisualShowcaseConfig
} from './visualShowcase';

// تصدير افتراضي
export { default } from './visualShowcase';

// تصدير الأنماط (للاستخدام مع bundlers)
export const visualShowcaseStyles = './visualShowcase.css';