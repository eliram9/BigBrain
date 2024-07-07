// useThemeSwitcher.js
import { useState, useEffect } from 'react';

const useThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme || 'light'; // 'light' will be the default theme
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    // Apply the stored theme on initial load
    document.body.classList.add(theme);
    return () => {
      // Clean up class on unmount
      document.body.classList.remove(theme);
    };
  }, [theme]);

  return [theme, toggleTheme];
};

export default useThemeSwitcher;

