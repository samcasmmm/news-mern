import useThemeMode from './../hooks/useThemeMode';

const ThemeSwitcher = () => {
  const [colorMode, setColorMode] = useThemeMode();

  return (
    <label className='relative inline-flex items-center cursor-pointer'>
      <input
        type='checkbox'
        className='sr-only peer'
        checked={colorMode === 'dark'}
        onChange={() => {
          if (typeof setColorMode === 'function') {
            setColorMode(colorMode === 'light' ? 'dark' : 'light');
          }
        }}
      />
      <div className="w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 bg-gray-500"></div>
    </label>
  );
};

export default ThemeSwitcher;
