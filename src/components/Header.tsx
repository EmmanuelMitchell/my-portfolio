import { Menu } from "lucide-react";
import React, { useRef } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const scrollToSection = (elementRef: React.RefObject<HTMLElement>) => {
    setMobileMenuOpen(false);
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className="container mx-auto py-4 px-4 md:px-0 sticky top-0 bg-gray-900 z-10">
      <nav className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-500">Jayjay Dinero</h1>
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu size={24} />
          </button>
        </div>
        <ul
          className={`md:flex md:space-x-4 ${
            mobileMenuOpen ? "block" : "hidden"
          } absolute md:relative top-16 md:top-0 left-0 md:left-auto right-0 md:right-auto bg-gray-800 md:bg-transparent p-4 md:p-0`}
        >
          <li>
            <button
              onClick={() => scrollToSection({ current: document.body })}
              className="block py-2 md:py-0 hover:text-purple-500 w-full text-left"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="block py-2 md:py-0 hover:text-purple-500 w-full text-left"
            >
              About me
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(projectsRef)}
              className="block py-2 md:py-0 hover:text-purple-500 w-full text-left"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="block py-2 md:py-0 hover:text-purple-500 w-full text-left"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
