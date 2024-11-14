// import React from "react";
// import { ExternalLink, Github } from "lucide-react";

// const projects = [
//   {
//     name: "E-commerce Dashboard",
//     description:
//       "A comprehensive admin dashboard for managing products, orders, and customers. Built with React, TypeScript, and Tailwind CSS.",
//     image:
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60",
//     tags: ["React", "TypeScript", "Tailwind"],
//     liveUrl: "https://example.com",
//     githubUrl: "https://github.com",
//   },
//   {
//     name: "Task Management App",
//     description:
//       "A collaborative task management application with real-time updates and team features.",
//     image:
//       "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60",
//     tags: ["React", "Node.js", "MongoDB"],
//     liveUrl: "https://example.com",
//     githubUrl: "https://github.com",
//   },
//   {
//     name: "Weather Dashboard",
//     description:
//       "A weather application showing detailed forecasts and historical weather data visualization.",
//     image:
//       "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=500&auto=format&fit=crop&q=60",
//     tags: ["React", "Chart.js", "API"],
//     liveUrl: "https://example.com",
//     githubUrl: "https://github.com",
//   },
// ];

// type ProjectsProps = {
//   reference: React.RefObject<HTMLElement>;
// };

// const Projects: React.FC<ProjectsProps> = ({ reference }) => {
//   return (
//     <section ref={reference} className="py-20 scroll-mt-20">
//       <div className="container mx-auto px-4 md:px-6">
//         <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
//           Featured Projects
//         </h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-1"
//             >
//               <img
//                 src={project.image}
//                 alt={project.name}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
//                   {project.name}
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-300 mb-4">
//                   {project.description}
//                 </p>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tags.map((tag, i) => (
//                     <span
//                       key={i}
//                       className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="flex gap-4">
//                   <a
//                     href={project.liveUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
//                   >
//                     <ExternalLink size={16} />
//                     <span>Live Demo</span>
//                   </a>
//                   <a
//                     href={project.githubUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
//                   >
//                     <Github size={16} />
//                     <span>Code</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    name: "E-commerce Dashboard",
    description:
      "A comprehensive admin dashboard for managing products, orders, and customers. Built with React, TypeScript, and Tailwind CSS.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60",
    tags: ["React", "TypeScript", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/EmmanuelMitchell",
  },
  {
    name: "Movie Searching App",
    description:
      "An app for searching movies using an API, displaying detailed information, ratings, and trailers.",
    image: "/move-img.png",
    tags: ["React", "API", "Movies"],
    liveUrl: "https://movie-searching-app-virid.vercel.app/",
    githubUrl: "https://github.com/EmmanuelMitchell/Movie-Searching-App",
  },
  {
    name: "QR Code Generator App",
    description: "A simple app to generate QR codes for any URL or text input.",
    image: "/QRCode.png",
    tags: ["React", "QRCode", "Utility"],
    liveUrl: "https://quickqr-creator.netlify.app/",
    githubUrl: "https://quickqr-creator.netlify.app/",
  },
];

type ProjectsProps = {
  reference: React.RefObject<HTMLElement>;
};

const Projects: React.FC<ProjectsProps> = ({ reference }) => {
  return (
    <section ref={reference} className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-1"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
