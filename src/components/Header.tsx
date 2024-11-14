import React, { useState } from "react";
import { Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

type HeaderProps = {
  onNavigate: (ref: React.RefObject<HTMLElement>) => void;
  refs: {
    about: React.RefObject<HTMLElement>;
    projects: React.RefObject<HTMLElement>;
    contact: React.RefObject<HTMLElement>;
  };
};

export default function Header({ onNavigate, refs }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const handleNavigation = (ref: React.RefObject<HTMLElement>) => {
    setMobileMenuOpen(true);
    onNavigate(ref);
  };

  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-gray-900 transition-colors duration-200">
      <nav className="container mx-auto py-4 px-4 md:px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            Emmanuel Mitchell
          </h1>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2"
              >
                <Menu size={24} />
              </button>
            </div>

            <ul
              className={`md:flex md:space-x-6 ${
                mobileMenuOpen
                  ? "absolute top-full left-0 right-0 bg-white dark:bg-gray-900 p-4 border-t dark:border-gray-800"
                  : "hidden"
              } md:relative md:top-auto md:bg-transparent md:p-0 md:border-none`}
            >
              <li>
                <button
                  onClick={() => handleNavigation({ current: document.body })}
                  className="block w-full text-left py-2 md:py-0 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation(refs.about)}
                  className="block w-full text-left py-2 md:py-0 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation(refs.projects)}
                  className="block w-full text-left py-2 md:py-0 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation(refs.contact)}
                  className="block w-full text-left py-2 md:py-0 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
