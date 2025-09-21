export function createProductsSolutionsSection(){
  const sec = document.createElement('section');
  sec.id='products';
  sec.className='products-solutions';
  sec.setAttribute('aria-labelledby','products-heading');
  sec.innerHTML=`<div class="ps-container">
    <div class="ps-header"><h3 id="products-heading" class="ps-title">منتجاتنا وحلول الشراكات</h3><p class="ps-sub">من الخامات ومكسبات الطعم إلى خطوط الإنتاج المتكاملة والشراكات التقنية.</p></div>
    <div class="ps-grid">
      <div class="ps-item accent"><div class="ps-item-inner"><h4>Ricatto</h4><p>علامتنا لمكسبات الطعم والخامات التي تمنح منتجاتك ثبات الجودة.</p><a href="#" class="ps-link">دخول الكatalog →</a></div></div>
      <div class="ps-item dark"><div class="ps-item-inner"><h4>Kaya Steel</h4><p>معدات وخطوط إنتاج بمعايير تصنيع دقيقة تدعم التوسع والتشغيل الذكي.</p><a href="#" class="ps-link">استعرض المعدات →</a></div></div>
      <div class="ps-item outline"><div class="ps-item-inner"><h4>حلول تكاملية</h4><p>دمج الاستشارات بالتشغيل والتدريب وسلاسل الإمداد في منظومة واحدة.</p><a href="#" class="ps-link">اطلب خارطة طريق →</a></div></div>
      <div class="ps-item ghost"><div class="ps-item-inner"><h4>تطوير منتجات</h4><p>ابتكار وصفات وتحسين التركيبات وفق معايير الذوق والجودة.</p><a href="#" class="ps-link">ابدأ التطوير →</a></div></div>
      <div class="ps-item dark alt"><div class="ps-item-inner"><h4>إدارة التشغيل</h4><p>تحسين الأداء، ضبط الجودة، تقليل الفاقد، ورفع كفاءة النظم.</p><a href="#" class="ps-link">جلسة تقييم أولية →</a></div></div>
      <div class="ps-item accent soft"><div class="ps-item-inner"><h4>التوريد والخامات</h4><p>شبكة موثوقة لتوفير المواد اللازمة بمستويات ثبات عالية.</p><a href="#" class="ps-link">طلب عرض أسعار →</a></div></div>
      <div class="ps-item outline alt2"><div class="ps-item-inner"><h4>إعادة الهيكلة</h4><p>حل تشوهات العمليات واستعادة الربحية والنمو المستدام.</p><a href="#" class="ps-link">خطّة إنقاذ →</a></div></div>
      <div class="ps-item ghost alt3"><div class="ps-item-inner"><h4>دعم المطاعم</h4><p>تطوير المطابخ المركزية وتوحيد الجودة التشغيلية.</p><a href="#" class="ps-link">احجز جلسة →</a></div></div>
    </div>
  </div>`;
  return sec;
}