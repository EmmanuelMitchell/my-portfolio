import React from "react";
import { ArrowRight } from "lucide-react";

type HeroProps = {
  onNavigate: (ref: React.RefObject<HTMLElement>) => void;
  aboutRef: React.RefObject<HTMLElement>;
};

export default function Hero({ onNavigate, aboutRef }: HeroProps) {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">
            Hello, I'm
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-6">
            Emmanuel Mitchell
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            A passionate Frontend Developer with 2 years of experience crafting
            beautiful web experiences. Currently expanding my skills into
            backend development to become a well-rounded Full Stack Developer. I
            specialize in React.js and modern JavaScript, creating responsive
            and user-friendly applications.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => onNavigate(aboutRef)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
            >
              About me <ArrowRight size={20} />
            </button>
            <a
              href="/resume.pdf"
              download
              className="border-2 border-purple-600 text-purple-600 dark:border-purple-400 dark:text-purple-400 px-6 py-3 rounded-lg hover:bg-purple-50 dark:hover:bg-gray-800 transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            // src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=800&auto=format&fit=crop&q=60"
            src="/mitchell.png"
            alt="Developer"
            className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
