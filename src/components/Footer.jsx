import React from 'react'
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faXTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <div
      className="mt-30 bg-blue-100/50 pt-10 px-5 pb-10 dark:bg-blue-900/20"
    >
      <section className="w-full p-5 xl:grid xl:grid-cols-2 2xl:w-3/4 xl:m-auto xl:gap-10">
        {/* ===== part-1 ===== */}
        <div>
          <div className="flex items-center gap-2 cursor-pointer">
            {/* logo img */}
            <img
              className="w-15 h-15 lg:w-15 lg:h-15 object-cover"
              src={logo}
              alt="site-logo"
            />

            {/* logo text  */}
            <div className="flex items-center">
              <p className="font-bold text-3xl lg:text-2xl bg-linear-to-r from-orange-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
                Phoenixion
              </p>
              <span className="font-medium text-gray-500 text-3xl lg:text-2xl dark:text-white">
                .ai
              </span>
            </div>
          </div>

          <p className="text-sm xl:text-base text-gray-500 dark:text-gray-400">
            From strategy to execution, we craft digital solutions that move
            your business forward.
          </p>

          <ul className="mt-5 xl:flex xl:gap-8 xl:items-center">
            <li>
              <a
                className="text-xs xl:text-sm text-gray-500 dark:text-gray-400"
                href="#hero"
              >
                Home
              </a>
            </li>
            <li className="mt-1 xl:m-0">
              <a
                className="text-xs xl:text-sm text-gray-500 dark:text-gray-400"
                href="#services"
              >
                Services
              </a>
            </li>
            <li className="mt-1 xl:m-0">
              <a
                className="text-xs xl:text-sm text-gray-500 dark:text-gray-400"
                href="#ourWork"
              >
                Our Work
              </a>
            </li>
            <li className="mt-1 xl:m-0">
              <a
                className="text-xs xl:text-sm text-gray-500 dark:text-gray-400"
                href="#contact"
              >
                Testimonial
              </a>
            </li>
          </ul>
        </div>

        {/* ====== part-2 ===== */}
        <div className="mt-8">
          <h3 className="text-lg text-gray-600 dark:text-gray-300 ">
            Subscribe to our newsletter
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          {/* ===== inpit section ==== */}
          <form className="flex items-center gap-2 mt-5">
            <input
              className="basis-7/8 w-full border border-orange-600 dark:border-orange-600/80 h-7.5 rounded-2xl outline-0 text-orange-600 px-2 pl-4 text-xs lg:h-10 lg:rounded-lg xl:text-sm tracking-widest"
              required
              type="email"
            />
            <div className="w-7 h-7 rounded-full lg:w-40 lg:h-10 text-center content-center bg-linear-to-r from-orange-500 to-rose-500 lg:rounded-lg text-white font-bold cursor-pointer hover:bg-linear-to-r hover:from-orange-600/80 hover:to-rose-600/80">
              <a
                className="flex items-center gap-2 justify-center text-sm"
                href=""
              >
                <span className="hidden lg:block">Subscribe</span>
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
              </a>
            </div>
          </form>
        </div>
      </section>
      <div className="w-[95%] h-px bg-gray-400/50 m-auto 2xl:w-3/4 mt-5 mb-10"></div>

      {/* ========== footer last part ==========  */}
      <div className="flex flex-col-reverse gap-5 md:flex-row md:justify-between md:px-10 2xl:w-3/4 2xl:m-auto">
        <p className="text-xs text-gray-500/80">
          Copyright 2026 <span className="text-sm">ⓒ</span> Phoenixion.ai-All
          Right Reserved
        </p>
        <div className="flex gap-4">
          <FontAwesomeIcon
            icon={faFacebook}
            className="hover:text-blue-600 transition-colors text-xl text-gray-500/80 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faXTwitter}
            className="hover:text-black dark:hover:text-gray-300 transition-colors text-xl text-gray-500/80 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="hover:text-pink-600 transition-colors text-xl text-gray-500/80 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className="hover:text-blue-700 transition-colors text-xl text-gray-500/80 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer