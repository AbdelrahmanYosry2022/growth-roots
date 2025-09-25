// Animated Title Component using flip-words effect

interface AnimatedTitleOptions {
  words: string[];
  duration?: number;
  className?: string;
}

export function createAnimatedTitle(options: AnimatedTitleOptions): HTMLElement {
  const { words, duration = 3000, className = '' } = options;
  
  const container = document.createElement('div');
  container.className = `animated-title ${className}`;
  
  let currentIndex = 0;
  let isAnimating = false;
  
  const wordElement = document.createElement('div');
  wordElement.className = 'animated-word';
  wordElement.textContent = words[0];
  container.appendChild(wordElement);
  
  const animateToNextWord = () => {
    if (isAnimating) return;
    
    isAnimating = true;
    const nextIndex = (currentIndex + 1) % words.length;
    const nextWord = words[nextIndex];
    
    // Exit animation
    wordElement.style.transform = 'translateY(-40px) translateX(40px) scale(2)';
    wordElement.style.opacity = '0';
    wordElement.style.filter = 'blur(8px)';
    
    setTimeout(() => {
      wordElement.textContent = nextWord;
      wordElement.style.transform = 'translateY(10px)';
      wordElement.style.opacity = '0';
      wordElement.style.filter = 'blur(8px)';
      
      // Enter animation
      setTimeout(() => {
        wordElement.style.transform = 'translateY(0)';
        wordElement.style.opacity = '1';
        wordElement.style.filter = 'blur(0px)';
        
        currentIndex = nextIndex;
        isAnimating = false;
      }, 50);
    }, 300);
  };
  
  // Start animation loop
  const startLoop = () => {
    if (!isAnimating) {
      setTimeout(() => {
        animateToNextWord();
        startLoop();
      }, duration);
    }
  };
  
  startLoop();
  
  return container;
}

export function initAnimatedTitle() {
  // Initialize any global styles or setup if needed
}

export default { createAnimatedTitle, initAnimatedTitle };