import './core/base.css';
import './core/utilities.css';
import './components/header/header.css';
import './components/hero/hero.css';
import './pages/home/stacked/stacked.css';


import './pages/home/services/services.css';
import './pages/home/productsSolutions/productsSolutions.css';
import './pages/home/testimonials/testimonials.css';
import './pages/home/contact/contact.css';
import './pages/home/footer/footer.css';
import './pages/home/downArrow.css';
import { mountHome } from './pages/home/home';

const root = document.getElementById('app') || (() => { const d=document.createElement('div'); d.id='app'; document.body.appendChild(d); return d; })();

mountHome(root as HTMLElement);
