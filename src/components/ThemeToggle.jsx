'use client';

export default function ThemeToggle() {
  function toggleTheme() {
    const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('theme', theme); } catch { /* Theme still works when storage is unavailable. */ }
  }

  return (
    <button type="button" className="theme-toggle" onClick={toggleTheme}>
      <span className="theme-light-label"><span aria-hidden="true">☾</span><span className="sr-only">Switch to dark mode</span></span>
      <span className="theme-dark-label"><span aria-hidden="true">☀</span><span className="sr-only">Switch to light mode</span></span>
    </button>
  );
}
