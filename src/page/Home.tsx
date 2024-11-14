// import React, { useRef } from "react";
// import {
//   Camera,
//   Code,
//   Smartphone,
//   GitBranch,
//   Package,
//   Database,
//   Menu,
//   GithubIcon,
// } from "lucide-react";

// const skills = [
//   // { name: "UI & UX DESIGNING", icon: <Camera />, active: true },
//   { name: "WEB DEVELOPMENT", icon: <Code />, active: true },
//   // { name: "MOBILE DEVELOPMENT", icon: <Smartphone /> },
//   // { name: "WEB SCRAPING WITH PYTHON", icon: <Database /> },
//   { name: "JavaScript Frameworks: React.js", icon: <Code />, active: true },
//   { name: "JavaScript Frameworks: SvelteKit", icon: <Code />, active: true },
//   { name: "CSS Framework: Tailwind CSS", icon: <Code />, active: true },
//   { name: "Full Stack Framework: Next.js", icon: <Code />, active: true },
//   { name: "TypeScript", icon: <Code />, active: true },
//   { name: "MongoDB", icon: <Database />, active: true },
//   { name: "Node.js", icon: <Code />, active: true },
//   { name: "JavaScript", icon: <Code />, active: true },
//   { name: "Python", icon: <Database />, active: true },
//   { name: "ORM: Drizzle", icon: <Database />, active: true },
//   { name: "ORM: Prisma", icon: <Database />, active: true },
//   { name: "Mongoose (for MongoDB)", icon: <Database />, active: true },
//   { name: "GitHub", icon: <GithubIcon />, active: true }, // GitHub icon (you can use any GitHub icon library)
//   { name: "SQL", icon: <Database />, active: true }, // You can change the icon to a SQL-related icon
// ];

// const services = [
//   {
//     name: "UI & UX DESIGNING",
//     icon: <Camera />,
//     description: "I design beautiful web interfaces with Figma and Adobe XD",
//   },
//   {
//     name: "WEB DEVELOPMENT",
//     icon: <Code />,
//     description:
//       "I create beautiful websites with simple HTML, CSS, & JavaScript and also frameworks like Angular and ReactJS",
//   },
//   {
//     name: "MOBILE DEVELOPMENT",
//     icon: <Smartphone />,
//     description:
//       "I am an expert mobile developer. I have experience using Flutter and React Native.",
//   },
//   {
//     name: "VERSION CONTROL",
//     icon: <GitBranch />,
//     description:
//       "I can use version control systems well, and Git & Mercurial are my go-to tools.",
//   },
//   {
//     name: "NPM AND NODEJS",
//     icon: <Package />,
//     description:
//       "I have core understanding of NPM. I can also develop general purpose applications with NodeJS",
//   },
//   {
//     name: "WEB SCRAPING",
//     icon: <Database />,
//     description:
//       "I can collect content and data from the internet then manipulate and analyze as needed.",
//   },
// ];

// const projects = [
//   {
//     name: "Employee Portal",
//     description:
//       "A web application for managing employee details, attendance, and tasks.",
//     image: "/api/placeholder/400/320",
//   },
//   {
//     name: "School Management System",
//     description:
//       "A comprehensive system for managing student data, grades, and schedules.",
//     image: "/api/placeholder/400/320",
//   },
//   {
//     name: "Movie App",
//     description:
//       "An app to browse and stream your favorite movies and TV shows.",
//     image: "/api/placeholder/400/320",
//   },
//   {
//     name: "QR Code Generator App",
//     description:
//       "A simple app to create custom QR codes for websites, contacts, and more.",
//     image: "/api/placeholder/400/320",
//   },
// ];

// const Home: React.FC = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

//   const aboutRef = useRef<HTMLElement>(null);
//   const projectsRef = useRef<HTMLElement>(null);
//   const contactRef = useRef<HTMLElement>(null);

//   const scrollToSection = (elementRef: React.RefObject<HTMLElement>) => {
//     setMobileMenuOpen(false);
//     elementRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div className="bg-gray-900 text-white min-h-screen">
//       <header className="container mx-auto py-4 px-4 md:px-0 sticky top-0 bg-gray-900 z-10">
//         <nav className="flex justify-between items-center">
//           <h1 className="text-2xl font-bold text-purple-500">
//             Emmanuel Mitchell
//           </h1>
//           <div className="md:hidden">
//             <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//               <Menu size={24} />
//             </button>
//           </div>
//           <ul
//             className={`md:flex md:space-x-4 ${
//               mobileMenuOpen ? "block" : "hidden"
//             } absolute md:relative top-16 md:top-0 left-0 md:left-auto right-0 md:right-auto bg-gray-800 md:bg-transparent p-4 md:p-0`}
//           >
//             <li>
//               <button
//                 onClick={() => scrollToSection({ current: document.body })}
//                 className="block py-2 md:py-0 hover:text-purple-500 w-full text-left"
//               >
//                 Home
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => scrollToSection(aboutRef)}
//                 className="block py-2 md:py-0 hover:text-purple-500 w-full text-left"
//               >
//                 About me
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => scrollToSection(projectsRef)}
//                 className="block py-2 md:py-0 hover:text-purple-500 w-full text-left"
//               >
//                 Projects
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => scrollToSection(contactRef)}
//                 className="block py-2 md:py-0 hover:text-purple-500 w-full text-left"
//               >
//                 Contact
//               </button>
//             </li>
//           </ul>
//         </nav>
//       </header>

//       <main className="container font-body mx-auto mt-10 px-4 md:px-0">
//         <section className="flex flex-col md:flex-row items-center md:justify-between min-h-screen">
//           <div className="mb-8 md:mb-0">
//             <h2 className="text-3xl md:text-4xl font-sans mb-2">Hello, I'm</h2>
//             <h1 className="text-4xl md:text-5xl font-sans text-purple-500 mb-4">
//               Emmanuel Mitchell
//             </h1>
//             <p className="mb-6 max-w-2xl ">
//               passionate about crafting seamless digital experiences from front
//               to back. With expertise in both frontend and backend technologies,
//               I thrive in bridging the gap between design and functionality.
//               From building responsive user interfaces with{" "}
//               <strong>HTML</strong>, <strong>CSS</strong>,{" "}
//               <strong>JavaScript</strong> and
//               <strong> Reactjs</strong> etc ,to architecting robust server-side
//               solutions using frameworks like Node.js and databases like MongoDB
//               or SQL, I'm dedicated to delivering scalable, efficient, and
//               user-centric applications. Let's collaborate to bring your ideas
//               to life in the digital realm!
//             </p>
//             <div className="space-x-4">
//               <button
//                 onClick={() => scrollToSection(aboutRef)}
//                 className="bg-purple-500 text-white px-4 py-2 rounded"
//               >
//                 About me
//               </button>
//               <button className="border border-purple-500 text-purple-500 px-4 py-2 rounded">
//                 <a href="./public/Profile.pdf" download={true}>
//                   Download Cv
//                 </a>
//               </button>
//             </div>
//           </div>
//           <img
//             src="/mitchell.png"
//             alt="Emmanuel Mitchell"
//             className="rounded-full w-48 h-48 md:w-64 md:h-64"
//           />
//         </section>

//         <section
//           ref={aboutRef}
//           className="mt-20 min-h-screen flex flex-col justify-center"
//         >
//           <h2 className="text-3xl font-bold mb-6">About me:</h2>
//           <p className="mb-6">
//             Hi, I'm Emmanuel Mitchell, a passionate Full-Stack Web Developer,
//             UI/UX Designer, and Mobile Developer. With a strong foundation in
//             web development, I specialize in building dynamic, responsive, and
//             user-friendly applications. I also have advanced expertise in UI
//             design principles, ensuring that every project is not only
//             functional but also visually engaging. I enjoy combining technical
//             skills with creative problem-solving to deliver high-quality digital
//             experiences.
//           </p>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
//             {skills.map((skill, index) => (
//               <div
//                 key={index}
//                 className={`p-4 rounded ${
//                   skill.active ? "bg-purple-500" : "bg-gray-800"
//                 }`}
//               >
//                 {skill.icon}
//                 <p className="mt-2">{skill.name}</p>
//               </div>
//             ))}
//           </div>
//           <p className="text-xl md:text-2xl font-bold">
//             <span className="text-purple-500 text-3xl md:text-4xl">2+</span>{" "}
//             Years of experience. Specialised in building apps, while ensuring a
//             seamless web experience for end users.
//           </p>
//         </section>

//         <section className="mt-20">
//           <h2 className="text-3xl font-bold mb-6">The services I offer:</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {services.map((service, index) => (
//               <div key={index} className="bg-gray-800 p-6 rounded">
//                 {service.icon}
//                 <h3 className="text-xl font-bold mt-4 mb-2">{service.name}</h3>
//                 <p>{service.description}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section
//           ref={projectsRef}
//           className="mt-20 min-h-screen flex flex-col justify-center"
//         >
//           <h2 className="text-3xl font-bold mb-6">Featured projects:</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {projects.map((project, index) => (
//               <div key={index} className="bg-gray-800 rounded overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.name}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-xl font-bold mb-2">{project.name}</h3>
//                   <p className="mb-4">{project.description}</p>
//                   <div className="flex space-x-2">
//                     <button className="bg-purple-500 text-white px-3 py-1 rounded text-sm">
//                       View Live
//                     </button>
//                     <button className="border border-purple-500 text-purple-500 px-3 py-1 rounded text-sm">
//                       Github Repo
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section
//           ref={contactRef}
//           className="mt-20 min-h-screen flex flex-col justify-center items-center"
//         >
//           <h2 className="text-3xl font-sans mb-6 capitalize">
//             Contact me, let's make magic together
//           </h2>
//           <form className="max-w-lg mx-auto">
//             <input
//               type="text"
//               placeholder="Name"
//               className="w-full bg-gray-800 p-2 rounded mb-4"
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full bg-gray-800 p-2 rounded mb-4"
//             />
//             <textarea
//               placeholder="Message"
//               className="w-full bg-gray-800 p-2 rounded mb-4"
//               rows={4}
//             ></textarea>
//             <button
//               type="submit"
//               className="bg-purple-500 text-white px-4 py-2 rounded w-full md:w-full"
//             >
//               Send
//             </button>
//           </form>
//         </section>
//       </main>

//       <footer className="container mx-auto mt-20 py-10 px-4 md:px-0">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <p className="mb-4 md:mb-0">
//             &copy; {new Date().getFullYear()} Emmanuel Mitchell
//           </p>

//           <div className="flex space-x-4">
//             <a href="#" className="text-purple-500 hover:text-purple-400">
//               Facebook
//             </a>
//             <a href="#" className="text-purple-500 hover:text-purple-400">
//               Twitter
//             </a>
//             <a href="#" className="text-purple-500 hover:text-purple-400">
//               Instagram
//             </a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;
