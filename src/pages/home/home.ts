import { createHeader, initHeader } from '../../components/header/header';
import { createHero } from '../../components/hero/hero';
import { initHeroSlider } from '../../components/hero/sliderInit';
import { createStackedSection, initStackedSection } from './stackedSection';
import { createAboutSection } from './aboutSection';
import { createServicesSection } from './servicesSection';
import { createProductsSolutionsSection } from './productsSolutionsSection';
import { createTestimonialsSection, initTestimonialsRotation } from './testimonialsSection';
import { createContactSection, initContactForm } from './contactSection';
import { createFooterSection, initFooter } from './footerSection';
import { createDownArrow } from './downArrow';

export function mountHome(root: HTMLElement) {
  const frag = document.createDocumentFragment();
  frag.appendChild(createHeader());
  frag.appendChild(createHero());
  frag.appendChild(createDownArrow());
  frag.appendChild(createStackedSection());
  frag.appendChild(createAboutSection());
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
