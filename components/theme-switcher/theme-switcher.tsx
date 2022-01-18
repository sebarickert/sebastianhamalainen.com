import { useEffect, useState } from 'react';
import { classnames } from 'tailwindcss-classnames';
import { Icon } from '../icon/icon';

export const ThemeSwitcher = (): JSX.Element => {
  const [currentTheme, setCurrentTheme] = useState<string | null>(null);

  const handleThemeUpdate = (theme) => {
    localStorage.setItem('theme', theme);
    setCurrentTheme(theme);
  };

  const handleClick = () => {
    // console.log(localStorage.getItem('theme'));
    if (localStorage.getItem('theme') === 'dark') {
      localStorage.setItem('theme', 'light');
      // handleThemeUpdate('light');
    }

    // if (localStorage.getItem('theme') === 'light') {
    //   handleThemeUpdate('dark');
    // }

    // console.log(currentTheme);
    // console.log(localStorage.getItem('theme'));
  };

  console.log(currentTheme);

  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        localStorage.setItem('theme', 'light');
      }

      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        localStorage.setItem('theme', 'dark');
      }
    }
  }, []);

  // useEffect(() => {
  //   if (localStorage.getItem('theme')) {
  //     setCurrentTheme(localStorage.getItem('theme'));
  //   }
  // }, [currentTheme]);

  setCurrentTheme(localStorage.getItem('theme'));

  return (
    <button
      onClick={handleClick}
      className={classnames(
        'ml-8',
        'h-12',
        'w-12',
        'inline-flex',
        'items-center',
        'justify-center',
        'rounded-full',
        'border-black',
        'bg-black'
        // 'bg-white'
      )}
      title={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} theme`}
    >
      <Icon type="moon" className="fill-white stroke-white translate-x-px" />
      {/* <Icon type="sun" /> */}
      <span className="sr-only">{`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} theme`}</span>
    </button>
  );
};
