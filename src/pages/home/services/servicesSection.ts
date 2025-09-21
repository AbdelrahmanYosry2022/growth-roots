export function createServicesSection(){
  const sec = document.createElement('section');
  sec.id='solutions';
  sec.className='services-section';
  sec.setAttribute('aria-labelledby','services-heading');
  sec.innerHTML=`<div class="section-heading"><h3 id="services-heading">حلولنا وخدماتنا</h3><p>نغطي دورة إنشاء وتشغيل وتطوير مصنع الغذاء بالكامل عبر حزمة خدمات مترابطة تدعم النمو والاستدامة.</p></div>
  <div class="services-grid">
    <div class="service-card"><h4>تأسيس المصانع</h4><p>من الفكرة إلى التشغيل الكامل بخطط مدروسة وتنفيذ انسيابي.</p></div>
    <div class="service-card"><h4>توريد المعدات</h4><p>خطوط إنتاج ومعدات بمعايير جودة دولية وشراكات موثوقة.</p></div>
    <div class="service-card"><h4>إدارة التشغيل</h4><p>تشغيل وتحسين الأداء وتقليل الفاقد وتحسين الربحية.</p></div>
    <div class="service-card"><h4>التدريب وبناء القدرات</h4><p>رفع كفاءة الفرق لضمان استدامة جودة المنتج.</p></div>
    <div class="service-card"><h4>تطوير المنتجات</h4><p>ابتكار وصفات وتحسين منتجات لملاءمة السوق.</p></div>
    <div class="service-card"><h4>توريد الخامات</h4><p>مكسبات طعم وخامات عالية الجودة تحت Ricatto.</p></div>
    <div class="service-card"><h4>إعادة الهيكلة</h4><p>حل مشكلات المصانع المتعثرة ورفع الكفاءة والإنتاجية.</p></div>
    <div class="service-card"><h4>دعم المطاعم</h4><p>تحسين الجودة التشغيلية وتطوير المطابخ المركزية.</p></div>
  </div>
  <div class="services-cta-wrap"><a href="#" class="outline-btn">استعرض كل الخدمات →</a></div>`;
  return sec;
}