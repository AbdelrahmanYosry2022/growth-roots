export function createDownArrow(){
  const btn = document.createElement('button');
  btn.id='down-arrow';
  btn.setAttribute('aria-label','الانتقال إلى القسم التالي');
  btn.className='down-arrow';
  btn.innerHTML='↓';
  btn.addEventListener('click',()=>{
    const next = document.querySelector('#stacked-cards, .stacked-section, .about-section');
    if(next) next.scrollIntoView({behavior:'smooth'});
  });
  return btn;
}
