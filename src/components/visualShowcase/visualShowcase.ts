import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// تسجيل ScrollTrigger إذا لم يكن مسجلاً
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// واجهة إعدادات المكون
interface VisualShowcaseConfig {
  container?: string | HTMLElement;
  images?: string[];
  videoSrc?: string;
  enableScrollAnimations?: boolean;
  enableLayerAnimations?: boolean;
  enableCenterAnimation?: boolean;
}

// الإعدادات الافتراضية
const defaultConfig: VisualShowcaseConfig = {
  container: '.visual-showcase',
  images: [
    '/licensed-image.jpeg',
    '/licensed-image (1).jpeg',
    '/licensed-image (2).jpeg',
    '/unnamed (1).png',
    '/licensed-image.jpeg',
    '/licensed-image (1).jpeg',
    '/licensed-image (2).jpeg',
    '/unnamed (1).png',
    '/licensed-image.jpeg',
    '/licensed-image (1).jpeg',
    '/licensed-image (2).jpeg',
    '/unnamed (1).png',
    '/licensed-image.jpeg',
    '/licensed-image (1).jpeg',
    '/licensed-image (2).jpeg',
    '/unnamed (1).png',
    '/licensed-image.jpeg'
  ],
  videoSrc: '/videos/EMSTEEL.mp4',
  enableScrollAnimations: true,
  enableLayerAnimations: true,
  enableCenterAnimation: true
};

// متغيرات عامة للمكون
let componentInstance: VisualShowcaseInstance | null = null;
let isScrollSupported = false;

// فئة مثيل المكون
class VisualShowcaseInstance {
  private container: HTMLElement;
  private config: VisualShowcaseConfig;
  private timelines: gsap.core.Timeline[] = [];
  private scrollTriggers: ScrollTrigger[] = [];

  constructor(config: VisualShowcaseConfig) {
    this.config = { ...defaultConfig, ...config };
    
    // العثور على الحاوية
    if (typeof this.config.container === 'string') {
      this.container = document.querySelector(this.config.container) as HTMLElement;
    } else {
      this.container = this.config.container as HTMLElement;
    }

    if (!this.container) {
      throw new Error('Visual Showcase container not found');
    }

    this.checkScrollSupport();
    this.createHTML();
    this.setupAnimations();
  }

  private checkScrollSupport(): void {
    // فحص دعم scroll animations
    isScrollSupported = CSS.supports('animation-timeline', 'scroll()') && 
                      CSS.supports('animation-range', '0 100%');
    
    if (isScrollSupported) {
      document.documentElement.setAttribute('data-enhanced', 'true');
      if (this.config.enableLayerAnimations) {
        document.documentElement.setAttribute('data-layers', 'true');
      }
      if (this.config.enableCenterAnimation) {
        document.documentElement.setAttribute('data-center', 'true');
      }
    }
  }

  private createHTML(): void {
    const html = `
      <div class="content">
        <main>
          <section>
            <div class="grid">
              <div class="layer">
                ${this.config.images?.slice(0, 6).map(src => 
                  `<div><img src="${src}" alt="Visual showcase image" loading="lazy" /></div>`
                ).join('')}
              </div>
              <div class="layer">
                ${this.config.images?.slice(6, 12).map(src => 
                  `<div><img src="${src}" alt="Visual showcase image" loading="lazy" /></div>`
                ).join('')}
              </div>
              <div class="layer">
                ${this.config.images?.slice(12, 17).map(src => 
                  `<div><img src="${src}" alt="Visual showcase image" loading="lazy" /></div>`
                ).join('')}
              </div>
              <div class="scaler">
                ${this.config.videoSrc ? 
                  `<video src="${this.config.videoSrc}" muted loop autoplay playsinline></video>` :
                  `<img src="${this.config.images?.[0]}" alt="Center showcase" loading="lazy" />`
                }
              </div>
            </div>
          </section>
        </main>
      </div>
    `;
    
    this.container.innerHTML = html;
  }

  private setupAnimations(): void {
    if (!this.config.enableScrollAnimations || isScrollSupported) {
      return; // استخدام CSS animations إذا كانت مدعومة
    }

    // إعداد GSAP animations كبديل
    this.setupGSAPAnimations();
  }

  private setupGSAPAnimations(): void {
  const layers = this.container.querySelectorAll('.layer');
  const items = this.container.querySelectorAll('.layer > div');
    const scaler = this.container.querySelector('.scaler');
    const section = this.container.querySelector('section');

    if (!section) return;

    // تنظيف الـ timelines السابقة
    this.cleanup();

    // إعداد timeline للطبقات
    if (this.config.enableLayerAnimations) {
      // تعيين الحالة الابتدائية لكل عنصر
      gsap.set(items, { opacity:0, scale:0 });
      const tl = gsap.timeline({
        scrollTrigger:{
          trigger: section,
          start:'top center',
          end:'+=150%',
          scrub:true
        }
      });
      // كل عنصر يتحرك بنفس الإطار الزمني (مطابقة لسلوك CSS الأصلي)
      tl.to(items, { opacity:1, scale:1, ease:'none', stagger:0 });
      this.timelines.push(tl);
      if(tl.scrollTrigger) this.scrollTriggers.push(tl.scrollTrigger);
    }

    // إعداد timeline للعنصر المركزي
    if (this.config.enableCenterAnimation && scaler) {
      const centerElement = scaler.querySelector('img, video');
      if (centerElement) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
            onUpdate: (self) => {
              const progress = self.progress;
              const scale = progress <= 0.1 ? 0.9 + (progress * 0.1) : 1;
              
              gsap.set(centerElement, {
                scale: scale
              });
            }
          }
        });
        
        this.timelines.push(tl);
        if (tl.scrollTrigger) {
          this.scrollTriggers.push(tl.scrollTrigger);
        }
      }
    }
  }

  public updateConfig(newConfig: Partial<VisualShowcaseConfig>): void {
    this.config = { ...this.config, ...newConfig };
    this.createHTML();
    this.setupAnimations();
  }

  public cleanup(): void {
    // تنظيف الـ timelines
    this.timelines.forEach(tl => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    });
    this.timelines = [];
    
    // تنظيف الـ scroll triggers
    this.scrollTriggers.forEach(st => st.kill());
    this.scrollTriggers = [];
    
    // إزالة الخصائص من document
    document.documentElement.removeAttribute('data-enhanced');
    document.documentElement.removeAttribute('data-layers');
    document.documentElement.removeAttribute('data-center');
  }

  public destroy(): void {
    this.cleanup();
    if (this.container) {
      this.container.innerHTML = '';
    }
  }
}

/**
 * إنشاء مكون Visual Showcase جديد
 * @param config إعدادات المكون
 * @returns مثيل المكون
 */
export function createVisualShowcase(config: VisualShowcaseConfig = {}): VisualShowcaseInstance {
  return new VisualShowcaseInstance(config);
}

/**
 * تهيئة مكون Visual Showcase
 * @param config إعدادات المكون
 * @returns مثيل المكون أو null في حالة الفشل
 */
export function initVisualShowcase(config: VisualShowcaseConfig = {}): VisualShowcaseInstance | null {
  try {
    // إزالة المثيل السابق إن وجد
    if (componentInstance) {
      removeVisualShowcase();
    }
    
    componentInstance = createVisualShowcase(config);
    return componentInstance;
  } catch (error) {
    console.error('فشل في تهيئة مكون Visual Showcase:', error);
    return null;
  }
}

/**
 * إزالة مكون Visual Showcase
 */
export function removeVisualShowcase(): void {
  if (componentInstance) {
    componentInstance.destroy();
    componentInstance = null;
  }
}

/**
 * الحصول على المثيل الحالي للمكون
 * @returns المثيل الحالي أو null
 */
export function getVisualShowcaseInstance(): VisualShowcaseInstance | null {
  return componentInstance;
}

// تصدير الفئة للاستخدام المتقدم
export { VisualShowcaseInstance, type VisualShowcaseConfig };

// تصدير افتراضي
export default {
  create: createVisualShowcase,
  init: initVisualShowcase,
  remove: removeVisualShowcase,
  getInstance: getVisualShowcaseInstance
};