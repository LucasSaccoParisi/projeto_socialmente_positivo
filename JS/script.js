function checkTheme() {
  const isDark = localStorage.theme === 'dark' || 
                (!('theme' in localStorage) && 
                 window.matchMedia('(prefers-color-scheme: dark)').matches);
  
  document.documentElement.classList.toggle('dark', isDark);
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
}

checkTheme();

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', checkTheme);

function setLightTheme() {
  localStorage.theme = 'light';
  checkTheme();
}

function setDarkTheme() {
  localStorage.theme = 'dark';
  checkTheme();
}

function resetTheme() {
  localStorage.removeItem('theme');
  checkTheme();
}
