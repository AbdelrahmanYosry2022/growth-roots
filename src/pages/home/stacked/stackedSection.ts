import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export function createStackedSection(){
  const section = document.createElement('section');
  section.id='stacked-cards';
  section.className='stacked-section';
  section.setAttribute('aria-labelledby','stacked-heading');
  section.innerHTML = `
    <div class="stacked-hero">
      <h2 id="stacked-heading">نغطي دورة حياة المصنع الغذائي كاملة — من التأسيس والتشغيل إلى التطوير وإعادة الهيكلة المستدامة.</h2>
    </div>
    <div class="stacked-divider"></div>
    <div class="stacked-cards-container">
      <div class="stack-card layer-1">
        <div class="card-content"><h3 class="card-title">تأسيس المصانع الجديدة</h3><p class="card-subtitle">الدعم الشامل من التخطيط حتى التشغيل</p></div>
        <div class="card-image-container"><span class="img-ph" aria-hidden="true"></span><img loading="lazy" decoding="async" class="card-image" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUQExMVFhUXGRgaGBgYGRkdGBoaGhgYGBgYGBgdHSggGBolHRgYITEhJSkrLi4uGh8zODMtNygtLisBCgoKDg0OGxAQGy0lICYtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIE/8QAGBABAAICAwAAAAAAAAAAAAAAAAECAwQF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdQAAAAAAAAAAAAAAAAAAAAAAAAD/2Q==" data-full="https://cdn.cosmos.so/ba8fd483-2042-47ed-a175-9c594fd538d1.jpeg" alt="تأسيس المصانع"></div>
      </div>
      <div class="stack-card layer-2">
        <div class="card-content"><h3 class="card-title">توريد خطوط الإنتاج والمعدات</h3><p class="card-subtitle">أحدث خطوط الإنتاج بمعايير عالمية</p></div>
        <div class="card-image-container"><span class="img-ph" aria-hidden="true"></span><img loading="lazy" decoding="async" class="card-image" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUQExMVFhUXGRgaGBgYGRkdGBoaGhgYGBgYGBgdHSggGBolHRgYITEhJSkrLi4uGh8zODMtNygtLisBCgoKDg0OGxAQGy0lICYtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIE/8QAGBABAAICAwAAAAAAAAAAAAAAAAECAwQF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdQAAAAAAAAAAAAAAAAAAAAAAAAD/2Q==" data-full="https://cdn.cosmos.so/913696c4-07e0-40f3-b6c2-0c0e8a18559a.jpeg" alt="توريد المعدات"></div>
      </div>
      <div class="stack-card layer-3">
        <div class="card-content"><h3 class="card-title">إدارة وتشغيل المصانع</h3><p class="card-subtitle">تشغيل وتحسين الكفاءة وتقليل الفاقد</p></div>
        <div class="card-image-container"><span class="img-ph" aria-hidden="true"></span><img loading="lazy" decoding="async" class="card-image" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUQExMVFhUXGRgaGBgYGRkdGBoaGhgYGBgYGBgdHSggGBolHRgYITEhJSkrLi4uGh8zODMtNygtLisBCgoKDg0OGxAQGy0lICYtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIE/8QAGBABAAICAwAAAAAAAAAAAAAAAAECAwQF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdQAAAAAAAAAAAAAAAAAAAAAAAAD/2Q==" data-full="https://cdn.cosmos.so/78f3c414-e013-4693-a02e-6bea74309e03.jpeg" alt="إدارة التشغيل"></div>
      </div>
      <div class="stack-card layer-4">
        <div class="card-content"><h3 class="card-title">التدريب وبناء القدرات</h3><p class="card-subtitle">نقل الخبرات لضمان الاستدامة التشغيلية</p></div>
        <div class="card-image-container"><span class="img-ph" aria-hidden="true"></span><img loading="lazy" decoding="async" class="card-image" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUQExMVFhUXGRgaGBgYGRkdGBoaGhgYGBgYGBgdHSggGBolHRgYITEhJSkrLi4uGh8zODMtNygtLisBCgoKDg0OGxAQGy0lICYtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIE/8QAGBABAAICAwAAAAAAAAAAAAAAAAECAwQF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdQAAAAAAAAAAAAAAAAAAAAAAAAD/2Q==" data-full="https://cdn.cosmos.so/c7d7c0ef-c730-4192-9687-42606e554e7c.jpeg" alt="التدريب"></div>
      </div>
      <div class="stack-card layer-5">
        <div class="card-content"><h3 class="card-title">تطوير المنتجات</h3><p class="card-subtitle">ابتكار وتحسين التركيبات والوصفات</p></div>
        <div class="card-image-container"><span class="img-ph" aria-hidden="true"></span><img loading="lazy" decoding="async" class="card-image" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUQExMVFhUXGRgaGBgYGRkdGBoaGhgYGBgYGBgdHSggGBolHRgYITEhJSkrLi4uGh8zODMtNygtLisBCgoKDg0OGxAQGy0lICYtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIE/8QAGBABAAICAwAAAAAAAAAAAAAAAAECAwQF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdQAAAAAAAAAAAAAAAAAAAAAAAAD/2Q==" data-full="https://cdn.cosmos.so/69b9691f-921b-43ab-afbb-3237d65f67ad.jpeg" alt="تطوير المنتجات"></div>
      </div>
    </div>
    <div style="height:60vh"></div>`;
  return section;
}

export function initStackedSection(){
  const cards = Array.from(document.querySelectorAll('.stack-card')) as HTMLElement[];
  if(!cards.length) return;
  const downArrow = document.getElementById('down-arrow');
  if(downArrow){
    downArrow.addEventListener('click',()=>{ document.querySelector('.about-section')?.scrollIntoView({behavior:'smooth'}); });
  }
  // LQIP swap
  cards.forEach(card=>{
    const img = card.querySelector<HTMLImageElement>('.card-image');
    if(!img) return; const full = img.getAttribute('data-full');
    if(full){ requestAnimationFrame(()=>{ img.src = full; }); }
    if(img.complete){ img.classList.add('loaded'); card.querySelector('.img-ph')?.remove(); }
    else {
      img.addEventListener('load',()=>{ img.classList.add('loaded'); card.querySelector('.img-ph')?.remove(); });
      img.addEventListener('error',()=>{ card.querySelector('.img-ph')?.classList.add('error'); });
    }
  });
  let progressEl = document.querySelector<HTMLElement>('.stack-progress');
  if(!progressEl){
    progressEl = document.createElement('div');
    progressEl.className='stack-progress';
    progressEl.setAttribute('role','progressbar');
    progressEl.setAttribute('aria-valuemin','0');
    progressEl.setAttribute('aria-valuemax','100');
    progressEl.setAttribute('aria-label','تقدم استعراض البطاقات');
    progressEl.innerHTML='<span></span>';
    document.body.appendChild(progressEl);
  }
  const bar = progressEl.querySelector('span') as HTMLElement | null;
  const isMobile = ()=> window.matchMedia('(max-width:900px)').matches;
  let stInstance:any; // ScrollTrigger ref
  function setupDesktop(){
    const cardVisibleAmount = 120; const initialOffset = 520; const tl = gsap.timeline();
    gsap.set('.stack-card .card-image', { scale:1.15 });
    cards.forEach((card,index)=>{
      if(index>0){
        gsap.set(card,{ y:index*initialOffset });
        tl.to(card,{ y:index*cardVisibleAmount, duration:index*0.45, ease:'none' },0)
          .to(card.querySelector('.card-image'), { scale:1, duration:0.5, ease:'none' },0);
      } else {
        gsap.set(card,{ y:0 });
        tl.to(card.querySelector('.card-image'), { scale:1, duration:0.5, ease:'none' },0);
      }
    });
    stInstance = ScrollTrigger.create({
      trigger:'.stacked-cards-container', start:'top top', pin:true, end:`+=${cards.length * initialOffset}`, scrub:true, animation:tl,
      onEnter:()=>{ progressEl!.style.opacity='1'; }, onEnterBack:()=>{ progressEl!.style.opacity='1'; }, onLeave:()=>{ progressEl!.style.opacity='0'; }, onLeaveBack:()=>{ progressEl!.style.opacity='0'; },
      onUpdate:(self:any)=>{ if(bar){ const pct = (self.progress*100); bar.style.height = pct+'%'; progressEl!.setAttribute('aria-valuenow', String(Math.round(pct))); } }
    });
    progressEl!.style.transition='opacity .35s ease';
  }
  function teardownDesktop(){ if(stInstance){ stInstance.kill(); stInstance=null; } cards.forEach(c=>{ c.style.transform=''; }); if(bar) bar.style.height='0%'; }
  function handleMode(){ if(isMobile()) { teardownDesktop(); progressEl!.style.display='none'; } else { progressEl!.style.display='block'; progressEl!.style.opacity='0'; setupDesktop(); } }
  handleMode(); window.addEventListener('resize', ()=>{ handleMode(); });
  if(isMobile()){
    const container = document.querySelector('.stacked-cards-container'); if(container){
      let isDown=false,startX=0,scrollLeft=0; container.addEventListener('pointerdown',(e:any)=>{ isDown=true; startX=e.pageX; scrollLeft=(container as any).scrollLeft; (container as HTMLElement).style.cursor='grabbing'; });
      window.addEventListener('pointerup',()=>{ isDown=false; (container as HTMLElement).style.cursor=''; });
      window.addEventListener('pointerleave',()=>{ isDown=false; (container as HTMLElement).style.cursor=''; });
      container.addEventListener('pointermove',(e:any)=>{ if(!isDown) return; const dx=e.pageX-startX; (container as any).scrollLeft=scrollLeft-dx; });
    }
  }
}