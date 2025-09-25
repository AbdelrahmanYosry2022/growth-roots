// Text on Tank Tread Animation Component

interface TextOnTreadOptions {
  text: string;
  duration?: number;
  treadFragments?: number;
}

function createTextOnTreadFragment(text: string, delay: number, duration: number, moveX: number, width: number): HTMLElement {
  const fragment = document.createElement('div');
  fragment.className = 'tot__tread';
  
  // Set animation properties
  fragment.style.animationDuration = `${duration}ms`;
  fragment.style.animationDelay = `${delay}ms`;
  fragment.style.width = `calc(${width}rem + 1px)`; // extra 1px for bleed
  
  // Create tread window
  const window = document.createElement('div');
  window.className = 'tot__tread-window';
  window.setAttribute('aria-hidden', 'true');
  window.setAttribute('data-text', text);
  window.style.transform = `translateX(${moveX}rem)`;
  
  fragment.appendChild(window);
  return fragment;
}

function createTextOnTreadLayer(text: string, layerFragments: HTMLElement[], ariaHidden: boolean = false): HTMLElement {
  const layer = document.createElement('div');
  layer.className = 'tot__layer';
  
  if (ariaHidden) {
    layer.setAttribute('aria-hidden', 'true');
  }
  
  // Add text content first
  layer.textContent = text;
  
  // Add all fragments
  layerFragments.forEach(fragment => {
    layer.appendChild(fragment);
  });
  
  return layer;
}

function createTextOnTread(container: HTMLElement, options: TextOnTreadOptions): void {
  const text = options.text;
  const duration = options.duration || 8000;
  const treadLength = 44.57; // from SCSS calculation
  const treadFragments = options.treadFragments || 80;
  const treadFragmentWidth = treadLength / treadFragments;
  
  const backTreadArray: HTMLElement[] = [];
  const frontTreadArray: HTMLElement[] = [];
  
  // Create fragments
  for (let f = 0; f < treadFragments; f++) {
    const percent = f / treadFragments;
    const moveX = f * treadFragmentWidth;
    
    // Back fragments
    const backFragment = createTextOnTreadFragment(
      text,
      -duration + (percent * duration),
      duration,
      -moveX,
      treadFragmentWidth
    );
    backTreadArray.push(backFragment);
    
    // Front fragments
    const frontFragment = createTextOnTreadFragment(
      text,
      -duration + ((percent - 0.5) * duration),
      duration,
      moveX,
      treadFragmentWidth
    );
    frontTreadArray.push(frontFragment);
  }
  
  // Clear container and set class
  container.innerHTML = '';
  container.className = 'tot';
  
  // Create and append layers
  const frontLayer = createTextOnTreadLayer(text, frontTreadArray, false);
  const backLayer = createTextOnTreadLayer(text, backTreadArray, true);
  
  container.appendChild(frontLayer);
  container.appendChild(backLayer);
}

// Mount function for integration
export function mountTextOnTread(containerId: string = 'textOnTread', text: string = 'RESILIENCE'): void {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with id '${containerId}' not found`);
    return;
  }
  
  createTextOnTread(container, { text });
}

// Initialize function
export function initTextOnTread(): void {
  console.log('Text on Tread initialized');
}

export { createTextOnTread };
export default { mountTextOnTread, initTextOnTread };