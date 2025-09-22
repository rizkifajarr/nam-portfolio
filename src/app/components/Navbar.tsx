"use client";

import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScroll(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/30 backdrop-blur-md shadow-sm text-darkpurple">
      {/* Container */}
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl font-bold tracking-wider text-pink-500"
        >
          NAM
        </a>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex items-center space-x-6 font-semibold text-base uppercase tracking-wider text-pink-500">
          <li>
            <a href="#about" className="hover:text-softpink transition">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-softpink transition">
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-softpink transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-pink-500 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 -translate-y-4"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-4"
      >
        <div className="sm:hidden px-4 pb-4">
          <div className="bg-white/50 backdrop-blur-md rounded-md shadow-lg p-4">
            <ul className="flex flex-col gap-4 text-darkpurple font-semibold text-base uppercase tracking-wider text-pink-500">
              <li>
                <a
                  onClick={handleLinkClick}
                  href="#about"
                  className="hover:text-softpink transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={handleLinkClick}
                  href="#experience"
                  className="hover:text-softpink transition"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  onClick={handleLinkClick}
                  href="#contact"
                  className="hover:text-softpink transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Transition>

      {/* Scroll Progress Bar */}
      <div className="h-[3px] w-full relative overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-pink-400 rounded-full transition-all duration-150 ease-in-out"
          style={{ width: `${scroll}%` }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
