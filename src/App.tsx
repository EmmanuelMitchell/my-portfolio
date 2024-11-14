import React, { useRef } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const scrollToSection = (elementRef: React.RefObject<HTMLElement>) => {
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
        <Header
          onNavigate={scrollToSection}
          refs={{ about: aboutRef, projects: projectsRef, contact: contactRef }}
        />
        <Hero onNavigate={scrollToSection} aboutRef={aboutRef} />
        <About reference={aboutRef} />
        <Projects reference={projectsRef} />
        <Contact reference={contactRef} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
