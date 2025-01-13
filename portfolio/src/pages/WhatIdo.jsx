import AnimateNextPage from "../component/AnimateNextPage";
import DynamicTitle from "../component/DynamicTitle";
import Skills from "../component/Skills";

const skills = [
  {
    title: "JavaScript",
    description:
      "Proficient in modern JavaScript (ES6+), including concepts like closures, asynchronous programming (Promises, async/await), and DOM manipulation. Experienced in writing clean, modular, and maintainable code.",
    icon: "FaJsSquare",
  },
  {
    title: "React.js",
    description:
      "Skilled in building responsive and interactive user interfaces using React. Proficient in React hooks (useState, useEffect, useContext), component architecture, and state management with Redux Toolkit. Familiar with Next.js for server-side rendering and static site generation.",
    icon: "FaReact",
  },
  {
    title: "TypeScript",
    description:
      "Experienced in using TypeScript for building type-safe applications. Comfortable with defining interfaces, types, and generics to enhance code maintainability and scalability.",
    icon: "SiTypescript",
  },
  {
    title: "CSS",
    description:
      "Advanced knowledge of CSS, including CSS Grid, Flexbox, animations, and transitions. Experienced in creating responsive and visually appealing designs using modern techniques like custom properties (CSS variables) and media queries. Proficient in preprocessors like SCSS and familiar with utility-first frameworks like Tailwind CSS.",
    icon: "FaCss3Alt",
  },
  {
    title: "Next.js",
    description:
      "Proficient in using Next.js for building static and server-rendered web applications. Familiar with features such as file-based routing, API routes, and static site generation (SSG). Experienced in working with dynamic routing, data fetching, and integrating Next.js with React and Redux.",
    icon: "SiNextdotjs", // You can use a suitable icon here, like FaReact for React-based projects
  },
  {
    title: "Git",
    description:
      "Experienced with Git for version control. Proficient in using Git for collaboration, branching, merging, and resolving conflicts. Familiar with Git workflows (e.g., GitFlow) and using platforms like GitHub and GitLab for hosting and collaboration on codebases.",
    icon: "FaGitAlt", // Use the Git icon from Font Awesome
  },
];

function WhatIdo() {
  return (
    <div className="relative bg-slate-900  w-full px-10">
      <DynamicTitle backText={"SERVICES"} title={"What I Do?"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6 mt-12 z-20 relative">
        {skills.map((item) => (
          <Skills
            key={item.title}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
        <AnimateNextPage href={"/resume"} />
      </div>
    </div>
  );
}

export default WhatIdo;
