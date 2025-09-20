import { createFragment } from '../../core/utils';
import { initHeroSlider } from './sliderInit';
import { createVerticalNavigation } from '../../pages/home/verticalNavigation';

export function createHero(){
  const container = document.createElement('section');
  container.className = 'hero-section';
  container.innerHTML = `
    <div class="hero-inner">
      <div class="slider-wrapper" id="slider">
        <div class="slider-images" aria-hidden="true">
          <img crossorigin="anonymous" src="/licensed-image.jpeg" alt="من دراسة الجدوى إلى التشغيل" />
          <img crossorigin="anonymous" src="/licensed-image (1).jpeg" alt="شراكة Kaya Steel" />
          <img crossorigin="anonymous" src="/licensed-image (2).jpeg" alt="علامة Ricatto" />
          <img crossorigin="anonymous" src="/unnamed (1).png" alt="الريادة في قطاع الأغذية" />
        </div>
        <div id="pagination" class="pagination" role="tablist" aria-label="شرائح البطل">
          <button data-slide="0" aria-label="الانتقال إلى الشريحة 1" role="tab" aria-selected="true"></button>
          <button data-slide="1" aria-label="الانتقال إلى الشريحة 2" role="tab" aria-selected="false"></button>
          <button data-slide="2" aria-label="الانتقال إلى الشريحة 3" role="tab" aria-selected="false"></button>
          <button data-slide="3" aria-label="الانتقال إلى الشريحة 4" role="tab" aria-selected="false"></button>
        </div>
        <div id="slide-progress" class="slide-progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-label="تقدم الشرائح"><span></span></div>
        

      </div>
      <div class="hero-overlay">
        <div class="hero-content">
          <h1 id="slide-title" class="hero-title" aria-live="polite">
            حلول صناعية<br>متكاملة
          </h1>
          <div class="visually-hidden" aria-hidden="true">
            <span data-slide-title="0">حلول صناعية<br>متكاملة</span>
            <span data-slide-title="1">تأسيس وتجهيز<br>المصانع</span>
            <span data-slide-title="2">تطوير منتجات<br>مبتكرة</span>
            <span data-slide-title="3">خبرة تمتد<br>لأكثر من 20 عامًا</span>
            <span data-slide-status="0">من دراسة الجدوى إلى التشغيل</span>
            <span data-slide-status="1">شراكة استراتيجية مع Kaya Steel</span>
            <span data-slide-status="2">علامتنا التجارية Ricatto للنكهات</span>
            <span data-slide-status="3">نحو الريادة في قطاع الأغذية</span>
          </div>
          <p id="slide-status" class="hero-status" aria-live="polite">من دراسة الجدوى إلى التشغيل</p>
        </div>
      </div>
    </div>
  `;
  // Add fallback class so first image is visible until WebGL canvas takes over
  requestAnimationFrame(()=>{
    const slider = container.querySelector('#slider');
    if(slider){ slider.classList.add('fallback-active'); }
    initHeroSlider();
    
    // إضافة أزرار التنقل العمودي
    const verticalNav = createVerticalNavigation();
    container.appendChild(verticalNav);
    
    // Remove fallback once loading class removed (loop a few times)
    let tries=0; const clearIntervalId=setInterval(()=>{
      if(!document.body.classList.contains('loading')){ slider?.classList.remove('fallback-active'); clearInterval(clearIntervalId); }
      if(++tries>40){ clearInterval(clearIntervalId); slider?.classList.remove('fallback-active'); }
    },200);
  });
  return container;
}
