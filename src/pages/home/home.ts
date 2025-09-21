import { createHeader, initHeader } from '../../components/header/header';
import { createHero } from '../../components/hero/hero';
import { initHeroSlider } from '../../components/hero/sliderInit';
import { createStackedSection, initStackedSection } from './stacked/stackedSection';

import { createServicesSection } from './services/servicesSection';
import { createProductsSolutionsSection } from './productsSolutions/productsSolutionsSection';
import { createTestimonialsSection, initTestimonialsRotation } from './testimonials/testimonialsSection';
import { createContactSection, initContactForm } from './contact/contactSection';
import { createFooterSection, initFooter } from './footer/footerSection';



export function mountHome(root: HTMLElement) {
  const frag = document.createDocumentFragment();
  frag.appendChild(createHeader());
  frag.appendChild(createHero());

  frag.appendChild(createStackedSection());
  frag.appendChild(createServicesSection());
  frag.appendChild(createProductsSolutionsSection());
  frag.appendChild(createTestimonialsSection());
  frag.appendChild(createContactSection());
  frag.appendChild(createFooterSection());
  root.appendChild(frag);
  initHeader();
  initHeroSlider();
  initStackedSection();
  initTestimonialsRotation();
  initContactForm();
  initFooter();
}
