export function createFooterSection(){
  const f = document.createElement('footer');
  f.className='site-footer';
  f.setAttribute('aria-labelledby','footer-heading');
  f.innerHTML=`<h2 id="footer-heading" class="sr-only">معلومات الفوتر</h2>
    <div class="footer-grid">
      <div class="footer-col"><h5>الشركة</h5><a href="#about">من نحن</a><a href="#solutions">الخدمات</a><a href="#products">المنتجات</a><a href="#contact">تواصل</a></div>
      <div class="footer-col"><h5>الخدمات</h5><a href="#">تأسيس المصانع</a><a href="#">إدارة التشغيل</a><a href="#">تطوير المنتجات</a><a href="#">إعادة الهيكلة</a></div>
      <div class="footer-col"><h5>روابط</h5><a href="#">الأسئلة الشائعة</a><a href="#">قصص النجاح</a><a href="#">الشراكات</a><a href="#">السياسة والخصوصية</a></div>
      <div class="footer-col"><h5>تابعنا</h5><div class="social-row"><a href="#" aria-label="LinkedIn">in</a><a href="#" aria-label="YouTube">YT</a><a href="#" aria-label="X">X</a></div></div>
    </div>
    <div class="footer-bottom">
      <div class="footer-brand"><img src="/logo/Asset%202.svg" alt="Growth Roots"><span>شريك صناعي متكامل</span></div>
      <div class="language-switch" aria-label="تبديل اللغة"><button class="active" data-lang="ar">AR</button><button data-lang="en">EN</button></div>
      <div>© <span id="year"></span> Growth Roots. جميع الحقوق محفوظة.</div>
    </div>`;
  return f;
}

export function initFooter(){
  const y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear().toString();
  const buttons = document.querySelectorAll('.language-switch button');
  buttons.forEach(btn=> btn.addEventListener('click', ()=>{ buttons.forEach(b=>b.classList.remove('active')); btn.classList.add('active'); }));
}
