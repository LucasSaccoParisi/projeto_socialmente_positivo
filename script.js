function checkTheme() {
  const isDark = localStorage.theme === 'dark' || 
                (!('theme' in localStorage) && 
                 window.matchMedia('(prefers-color-scheme: dark)').matches);
  
  document.documentElement.classList.toggle('dark', isDark);
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
}

checkTheme();
