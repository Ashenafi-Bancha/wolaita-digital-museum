// Runs before React to prevent a flash of the wrong color theme.
(function() {
  const getSystemTheme = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const theme = localStorage.getItem('wolaita-theme') || 'system';
  const resolvedTheme = theme === 'system' ? getSystemTheme() : theme;

  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(resolvedTheme);
})();
