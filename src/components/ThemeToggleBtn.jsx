import React from 'react';
import light from '../assets/light.png';
import dark from '../assets/night.png';

const ThemeToggleBtn = ({ theme, setTheme }) => {
  return (
    <>
      <button className="border w-7 h-7 rounded-full flex items-center justify-center cursor-pointer border-gray-900 dark:border-white lg:h-10 lg:w-10 dark:border">
        {theme === 'dark' ? (
          <img
            className="w-4.5 h-4.5 object-cover invert lg:h-6 lg:w-6"
            onClick={() => setTheme('light')}
            src={light}
          />
        ) : (
          <img
            className="w-4 h-4 object-cover lg:h-5 lg:w-5"
            onClick={() => setTheme('dark')}
            src={dark}
          />
        )}
      </button>
    </>
  );
};

export default ThemeToggleBtn;
