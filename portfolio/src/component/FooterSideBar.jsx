import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function FooterSideBar() {
  return (
    <ul className="flex justify-center w-full space-x-4 mt-5">
      {/* LinkedIn Icon */}
      <li className="group relative">
        <a
          href="https://www.linkedin.com/in/nima-chehreh-a24589270"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <FaLinkedinIn className="cursor-pointer text-2xl text-gray-700 hover:text-blue-600 transition-colors duration-300" />
        </a>
        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-[-4px] transition-all duration-300">
          LinkedIn
        </span>
      </li>

      {/* GitHub Icon */}
      <li className="group relative">
        <a
          href="https://github.com/nima000006"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <FaGithub className="cursor-pointer text-2xl text-gray-700 hover:text-gray-900 transition-colors duration-300" />
        </a>
        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 group-hover:translate-y-[-4px] transition-all duration-300">
          GitHub
        </span>
      </li>
    </ul>
  );
}

export default FooterSideBar;
