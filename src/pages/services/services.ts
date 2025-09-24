import { createHeader, initHeader } from '../../components/header/header';
import { createFooter, initFooter } from '../../components/footer/footer';
import { createServicesGrid, initServicesGrid } from '../../components/servicesGrid/servicesGrid';
// textOnTread section removed
import '../../components/header/header.css';
import '../../components/footer/footer.css';
import '../../components/servicesGrid/servicesGrid.css';

export async function mountServices(root: HTMLElement) {
	const frag = document.createDocumentFragment();

	frag.appendChild(createHeader());

	// Single-card section (reused markup from services grid)
	const singleSection = document.createElement('section');
	singleSection.className = 'single-service-section';
	singleSection.innerHTML = `
	  <div class="services-container">
	    <div class="grid">
	      <div class="service-card">
	        <div class="card-inner" style="--clr:#fff;">
	          <div class="box">
	            <div class="imgBox">
	              <img src="https://images.unsplash.com/photo-1601049676869-702ea24cfd58?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="حل مخصص">
	            </div>
	            <div class="icon">
	              <a href="#" class="iconBox">
	                <span class="material-symbols-outlined">arrow_outward</span>
	              </a>
	            </div>
	          </div>
	        </div>
	        <div class="content">
	          <h3>حل مخصص</h3>
	          <p>وصف قصير للكارد المفرد — خدمة مميزة نقدمها.</p>
	          <ul>
	            <li style="--clr-tag:#d3b19a;" class="custom">مخصص</li>
	          </ul>
	        </div>
	      </div>
	    </div>
	  </div>
	`;
	frag.appendChild(singleSection);

	// services grid
	const mainContent = document.createElement('main');
	mainContent.className = 'services-main';
	mainContent.insertAdjacentHTML('beforeend', createServicesGrid());
	frag.appendChild(mainContent);

	frag.appendChild(createFooter());

	root.appendChild(frag);

	// initialize
	initHeader();
	initServicesGrid();
	initFooter();
}

export default { mountServices };
