import React, { useState } from "react";
import { Code, Database, GitBranch } from "lucide-react"; // Ensure you're importing the icons properly

type AboutProps = {
  reference: React.RefObject<HTMLElement>;
};

const skills = [
  { name: "WEB DEVELOPMENT", icon: <Code />, active: true },
  { name: "JavaScript Frameworks: React.js", icon: <Code />, active: true },
  { name: "JavaScript Frameworks: SvelteKit", icon: <Code />, active: true },
  { name: "CSS Framework: Tailwind CSS", icon: <Code />, active: true },
  //   { name: "Full Stack Framework: Next.js", icon: <Code />, active: true },
  { name: "TypeScript", icon: <Code />, active: true },
  //   { name: "MongoDB", icon: <Database />, active: true },
  //   { name: "Node.js", icon: <Code />, active: true },
  { name: "JavaScript", icon: <Code />, active: true },
  { name: "Python", icon: <Database />, active: true },
  //   { name: "ORM: Drizzle", icon: <Database />, active: true },
  { name: "ORM: Prisma", icon: <Database />, active: true },
  //   { name: "Mongoose (for MongoDB)", icon: <Database />, active: true },
  { name: "GitHub", icon: <GitBranch />, active: true },
  { name: "SQL", icon: <Database />, active: true },
];

const About: React.FC<AboutProps> = ({ reference }) => {
  return (
    <section
      ref={reference}
      className="mt-20 min-h-screen flex flex-col justify-center"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-6">About me:</h2>
        <p className="mb-6">
          Hi, I'm Emmanuel Mitchell, a passionate Full-Stack Web Developer,
          UI/UX Designer, and Mobile Developer. With a strong foundation in web
          development, I specialize in building dynamic, responsive, and
          user-friendly applications. I also have advanced expertise in UI
          design principles, ensuring that every project is not only functional
          but also visually engaging. I enjoy combining technical skills with
          creative problem-solving to deliver high-quality digital experiences.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`p-4 rounded ${
                skill.active ? "bg-purple-500" : "bg-gray-800"
              }`}
            >
              {skill.icon}
              <p className="mt-2">{skill.name}</p>
            </div>
          ))}
        </div>

        <p className="text-xl md:text-2xl font-bold">
          <span className="text-purple-500 text-3xl md:text-4xl">2+</span> Years
          of experience. Specialised in building apps, while ensuring a seamless
          web experience for end users.
        </p>
      </div>
    </section>
  );
};

export default About;
