import useThemeMode from './../hooks/useThemeMode';

const ThemeSwitcher = () => {
  const [colorMode, setColorMode] = useThemeMode();

  return (
    <label className="relative inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        className="peer sr-only"
        checked={colorMode === 'dark'}
        onChange={() => {
          if (typeof setColorMode === 'function') {
            setColorMode(colorMode === 'light' ? 'dark' : 'light');
          }
        }}
      />
      <div className="h-6 w-11 rounded-full bg-gray-500 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white dark:border-gray-600 dark:bg-gray-700"></div>
    </label>
  );
};

export default ThemeSwitcher;
