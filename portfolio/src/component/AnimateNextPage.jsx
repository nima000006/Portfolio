/* eslint-disable react/prop-types */
import { FaChevronDown } from "react-icons/fa";
import { NavLink } from "react-router";

function AnimateNextPage({ href }) {
  return (
      <NavLink to={href} className="flex z-20 justify-center items-center fixed bottom-6 left-[50%]">
      <FaChevronDown className="text-3xl text-gray-200 animate-moveDown" />
    </NavLink>
  );
}

export default AnimateNextPage;
