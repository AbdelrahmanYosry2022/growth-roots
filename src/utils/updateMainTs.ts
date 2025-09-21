// Function to dynamically load CSS based on discovered sections
export function updateMainTsImports(availableSections: string[]): void {
  try {
    // Remove existing dynamic CSS imports
    const existingLinks = document.querySelectorAll('link[data-dynamic-section]');
    existingLinks.forEach(link => link.remove());
    
    // Add new CSS imports dynamically
    availableSections.forEach(sectionFolder => {
      const cleanName = sectionFolder.replace(/^\d+-/, '');
      const cssPath = `/src/pages/home/${sectionFolder}/${cleanName}.css`;
      
      // Create and append link element
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = cssPath;
      link.setAttribute('data-dynamic-section', sectionFolder);
      document.head.appendChild(link);
    });
    
    console.log('✅ Updated dynamic CSS imports successfully for sections:', availableSections);
  } catch (error) {
    console.warn('⚠️ Could not update dynamic CSS imports:', error);
  }
}

// Function to create a watcher for directory changes
export function watchForDirectoryChanges(callback: () => void): void {
  // This would require a file system watcher implementation
  // For now, we'll rely on manual calls
  console.log('Directory watcher would be implemented here');
}