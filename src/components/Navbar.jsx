import { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.png';
import ThemeToggleBtn from './ThemeToggleBtn';
import { motion } from 'motion/react';

const Navbar = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = e => {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('scroll', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('scroll', handleClickOutside);
    };
  }, [isOpen]);

  const [isScrolled, setIsScrolled] = useState(false); // Scroll state

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`sticky top-0 overflow-x-clip w-full h-15 px-2 sm:px-5 xl:w-3/4 xl:h-20 lg:p-10 m-auto flex items-center justify-between ${isScrolled ? 'bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-md shadow-sm' : 'bg-transparent dark:bg-transparent'} z-50`}
    >
      {/* website logo  */}
      <div
        onClick={() => (window.location.href = '#hero')}
        className="flex items-center gap-1 cursor-pointer"
      >
        {/* logo img */}
        <img
          className="w-8 h-8 lg:w-15 lg:h-15 object-cover"
          src={logo}
          alt="site-logo"
        />

        {/* logo text  */}
        <div className="flex items-center">
          <p className="font-bold text-md lg:text-2xl bg-linear-to-r from-orange-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
            Phoenixion
          </p>
          <span className="font-medium text-gray-500 text-md lg:text-2xl dark:text-white">
            .ai
          </span>
        </div>
      </div>

      {/* Navbar menu  */}
      <ul
        ref={menuRef}
        className={`gap-10 absolute top-0 ${isOpen ? 'right-0' : '-right-65'} duration-700 bg-linear-to-r from-orange-500 to-rose-500 w-62.5 h-screen pl-10 pt-10 flex flex-col text-white font-bold lg:right-0 lg:flex-row lg:w-auto lg:static lg:bg-none lg:bg-transparent lg:text-gray-500 lg:h-auto lg:p-0 lg:justify-center z-9999`}
      >
        {/* cross button */}
        <div onClick={() => setIsOpen(false)} className="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>

        {/* menu start */}
        <li>
          <a
            onClick={() => setIsOpen(false)}
            className="text-sm hover:underline hover:text-orange-600 duration-100 hover:font-bold dark:text-white"
            href="#hero"
          >
            Home
          </a>
        </li>
        <li>
          <a
            onClick={() => setIsOpen(false)}
            className="text-sm hover:underline hover:text-orange-600 duration-100 hover:font-bold dark:text-white"
            href="#services"
          >
            Services
          </a>
        </li>
        <li>
          <a
            onClick={() => setIsOpen(false)}
            className="text-sm hover:underline hover:text-orange-600 duration-100 hover:font-bold dark:text-white"
            href="#ourWork"
          >
            Our Work
          </a>
        </li>
        <li>
          <a
            onClick={() => setIsOpen(false)}
            className="text-sm hover:underline hover:text-orange-600 duration-100 hover:font-bold dark:text-white"
            href="#contact"
          >
            Contact Us
          </a>
        </li>
      </ul>

      {/* Contact us button  */}
      <section className="flex gap-3 items-center">
        {/* theme togle button  */}
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        {/* main contact button  */}
        <div
          onClick={() => (window.location.href = '#contact')}
          className="w-7 h-7 rounded-full lg:w-40 lg:h-10 text-center content-center bg-linear-to-r from-orange-500 to-rose-500 lg:rounded-lg text-white font-bold cursor-pointer hover:bg-linear-to-r hover:from-orange-600/80 hover:to-rose-600/80"
        >
          <span className="flex items-center gap-2 justify-center text-sm">
            <span className="hidden lg:block">Contact Us</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </span>
        </div>

        {/* menu opening bars */}
        <div
          onClick={() => {
            setIsOpen(true);
          }}
          className="lg:hidden dark:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </div>
      </section>
    </motion.div>
  );
};

export default Navbar;
