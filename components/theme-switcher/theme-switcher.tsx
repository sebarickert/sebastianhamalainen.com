import { useEffect, useState } from 'react';
import { Icon } from '../icon/icon';

const useLocalStorage = (value) => {
  const [intialized, setIntialized] = useState(false);

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem('theme');
      return item || value;
    } catch (error) {
      return value;
    } finally {
      setIntialized(true);
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem('theme', valueToStore);
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue, intialized];
};

export const ThemeSwitcher = (): JSX.Element => {
  const [isMounted, setIsMounted] = useState(false);
  const [currentTheme, setCurrentTheme, isThemeLoaded] = useLocalStorage(undefined);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleClick = () => {
    if (currentTheme === 'dark') {
      setCurrentTheme('light');
    }

    if (currentTheme === 'light') {
      setCurrentTheme('dark');
    }
  };

  useEffect(() => {
    if (typeof currentTheme !== 'undefined' || !isThemeLoaded) {
      return;
    }

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      setCurrentTheme('light');
    }

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setCurrentTheme('dark');
    }
  }, [isThemeLoaded]);

  const isLightTheme = typeof currentTheme === 'undefined' || currentTheme === 'light';

  useEffect(() => {
    if (isLightTheme) {
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
    }
  }, [isLightTheme]);

  if (!isMounted) return <span className="ml-8 h-12 w-12" aria-hidden="true" />;

  return (
    <button
      onClick={handleClick}
      className={`ml-8 inline-flex h-12 w-12 items-center justify-center rounded-full ring-offset-2 focus:ring ${
        isLightTheme ? 'bg-black' : 'bg-white'
      }`}
      title={`Switch to ${!isLightTheme ? 'light' : 'dark'} theme`}
    >
      {!isLightTheme ? <Icon type="sun" /> : <Icon type="moon" className={`translate-x-px fill-white stroke-white`} />}
      <span className="sr-only">{`Switch to ${!isLightTheme ? 'light' : 'dark'} theme`}</span>
    </button>
  );
};
