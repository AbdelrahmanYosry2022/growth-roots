export function createContactSection(){
  const sec = document.createElement('section');
  sec.id='contact';
  sec.className='contact-section';
  sec.setAttribute('aria-labelledby','contact-heading');
  sec.innerHTML=`<div class="section-heading" style="margin-bottom:50px;"><h3 id="contact-heading">تواصل معنا</h3><p>ابدأ الخطوة الأولى. فريقنا جاهز لدعمك في كل مرحلة.</p></div>
  <div class="contact-grid">
    <div class="contact-panel">
      <h4>طلب تواصل</h4>
      <form class="contact-form" id="contact-form" novalidate>
        <input type="text" name="name" placeholder="الاسم" required>
        <input type="email" name="email" placeholder="البريد الإلكتروني" required>
        <input type="tel" name="phone" placeholder="رقم الهاتف" required>
        <textarea name="message" rows="4" placeholder="اكتب رسالتك" required></textarea>
        <button type="submit" class="submit-btn">إرسال الاستفسار</button>
        <div class="form-status" id="form-status" aria-live="polite" style="font-size:13px; min-height:20px;"></div>
      </form>
    </div>
    <div class="contact-panel">
      <h4>بيانات التواصل</h4>
      <p>نرحب باتصالك أو مراسلتك المباشرة للحصول على استشارة أولية سريعة.</p>
      <div class="contact-facts">
        <div class="fact"><span>الهاتف</span><strong>+20 100 000 0000</strong></div>
        <div class="fact"><span>البريد</span><strong>info@growthroots.com</strong></div>
        <div class="fact"><span>الموقع</span><strong>القاهرة - مصر</strong></div>
      </div>
      <a href="#consult" class="outline-btn" style="align-self:flex-start;">احجز استشارة →</a>
    </div>
  </div>`;
  return sec;
}

export function initContactForm(){
  const form = document.getElementById('contact-form') as HTMLFormElement | null;
  const status = document.getElementById('form-status');
  if(!form || !status) return;
  form.addEventListener('submit', e=>{
    e.preventDefault();
    status.textContent='... جارٍ الإرسال';
    setTimeout(()=>{ status.textContent='تم استلام رسالتك بنجاح. سنعاود الاتصال قريباً.'; form.reset(); },1100);
  });
}