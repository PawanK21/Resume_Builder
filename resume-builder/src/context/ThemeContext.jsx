import React, { createContext, useContext, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [template, setTemplate] = useLocalStorage('template', 'modern');
  const [accentColor, setAccentColor] = useLocalStorage('accentColor', '#2563EB');
  const [font, setFont] = useLocalStorage('font', 'Inter');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, template, setTemplate, accentColor, setAccentColor, font, setFont }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};
