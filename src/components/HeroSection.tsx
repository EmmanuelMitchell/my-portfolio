export default function HeroSection() {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center text-center p-6"
      style={{ backgroundImage: "url(/path/to/hero-background.jpg)" }}
    >
      <div className="bg-opacity-70 bg-black p-8 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Welcome to My Portfolio
        </h1>
        <p className="text-md md:text-xl text-gray-300 mt-4">
          I’m Emmanuel Mitchell, a software developer passionate about building
          great experiences.
        </p>
        <a
          href="#portfolio"
          className="mt-8 inline-block px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
