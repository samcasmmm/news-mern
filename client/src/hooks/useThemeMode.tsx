import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useThemeMode = () => {
  const [themeMode, setThemeMode] = useLocalStorage('color-theme', 'light');

  useEffect(() => {
    const className = 'dark';
    const bodyClass = window.document.body.classList;

    themeMode === 'dark'
      ? bodyClass.add(className)
      : bodyClass.remove(className);
  }, [themeMode]);

  return [themeMode, setThemeMode];
};

export default useThemeMode;
