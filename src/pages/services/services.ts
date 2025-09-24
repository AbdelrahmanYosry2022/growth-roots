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

	// (text-on-tread section removed)

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
