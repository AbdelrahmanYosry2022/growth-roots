export function createTestimonialsSection(){
  const sec = document.createElement('section');
  sec.className='testimonials-section';
  sec.setAttribute('aria-labelledby','testimonials-heading');
  sec.innerHTML=`<div class="section-heading" style="margin-bottom:60px;">
    <h3 id="testimonials-heading">آراء وشراكات</h3>
    <p>ثقة شركائنا تُبنى على نتائج قابلة للقياس واستشارات عملية تعزز النمو.</p>
  </div>
  <div class="testimonials-track" id="testimonials-track">
    <div class="testimonial-card active" data-index="0"><div class="testimonial-quote">"دعم شامل ساعدنا على تسريع إطلاق خطوط إنتاج جديدة بجودة أعلى من المتوقع."</div><div class="testimonial-meta">مدير مصنع لحوم – السعودية</div></div>
    <div class="testimonial-card" data-index="1"><div class="testimonial-quote">"نقل المعرفة والتدريب العملي كان فارقاً في ضبط العمليات وتقليل الهدر."</div><div class="testimonial-meta">رئيس تشغيل – مصر</div></div>
    <div class="testimonial-card" data-index="2"><div class="testimonial-quote">"Ricatto أضافت قيمة واضحة في تطوير منتجاتنا من ناحية النكهة والثبات."</div><div class="testimonial-meta">مسؤول تطوير منتجات – الإمارات</div></div>
  </div>
  <div class="testimonial-dots" id="testimonial-dots" aria-label="اختيار شهادة">
    <button class="active" data-to="0" aria-label="شهادة 1"></button>
    <button data-to="1" aria-label="شهادة 2"></button>
    <button data-to="2" aria-label="شهادة 3"></button>
  </div>`;
  return sec;
}

export function initTestimonialsRotation(){
  const cards = Array.from(document.querySelectorAll('.testimonial-card')) as HTMLElement[];
  const dots = Array.from(document.querySelectorAll('#testimonial-dots button')) as HTMLButtonElement[];
  if(!cards.length) return; let idx=0; let timer:any;
  function activate(i:number){ cards.forEach(c=>c.classList.remove('active')); dots.forEach(d=>d.classList.remove('active')); cards[i].classList.add('active'); dots[i].classList.add('active'); idx=i; }
  function next(){ activate((idx+1)%cards.length); schedule(); }
  function schedule(){ clearTimeout(timer); timer=setTimeout(next,6000); }
  dots.forEach(d=> d.addEventListener('click',()=>{ activate(parseInt(d.dataset.to||'0')); schedule(); }));
  schedule();
}