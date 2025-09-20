export function createAboutSection(){
  const sec = document.createElement('section');
  sec.className='about-section';
  sec.setAttribute('aria-labelledby','about-heading');
  sec.innerHTML=`<div class="about-container">
    <h2 id="about-heading" class="sr-only">عن جروث روتس</h2>
    <div class="about-logo"><img src="/logo/Asset%201.svg" alt="جروث روتس"></div>
    <div class="text-container"><p>جروث روتس شركة متخصصة في تأسيس وتشغيل وتطوير مصانع اللحوم والدواجن والصناعات البروتينية. نقدم حلولًا شاملة تحت سقف واحد لضمان حصولك على كل ما يلزم لتحويل رؤيتك إلى منشأة إنتاج مزدهرة. يمتد خبرتنا عبر كل خطوة ضرورية لتحقيق ذلك – بدءًا من التخطيط المبدئي ودراسات الجدوى العلمية وإنشاء المصنع وتجهيزه بأحدث المعدات، مرورًا بإدارة العمليات وتدريب فريق العمل، ووصولًا إلى تطوير المنتجات وتوريد الخامات والدعم المستمر. نحن نضمن أن يُنتج مصنعك منتجات غذائية آمنة وعالية الجودة بمعايير دولية، مع تحقيق الكفاءة التشغيلية والربحية. مع جروث روتس سيكون لديك شريك موثوق في كل مرحلة، نلتزم بجعل مشروعك قصة نجاح مستدامة.</p></div>
  </div>`;
  return sec;
}
