import { useState } from "react";
import { NavLink } from "react-router";
import CustomerPicture from "./CustomerPicture";
import FooterSideBar from "./FooterSideBar";

function SlideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/lists-skills", name: "What I Do" },
    { path: "/resume", name: "Resume" },
    { path: "/portfolio", name: "Portfolio" },
    { path: "/testimonial", name: "Testimonial" },
    { path: "/contact", name: "Contact" },
  ];

  return (
 
      <aside className="relative h-full w-full  bg-gray-800 text-white ">
        {/* Hamburger Button */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="fixed top-4 left-4 z-50 bg-gray-800 text-gray-300 p-3 rounded-md lg:hidden"
          >
            <span className="block w-6 h-1 bg-gray-300 mb-1"></span>
            <span className="block w-6 h-1 bg-gray-300 mb-1"></span>
            <span className="block w-6 h-1 bg-gray-300"></span>
          </button>
        )}

        {/* Sidebar */}
        <nav
          className={`fixed top-0 left-0 lg:left-auto h-full bg-gray-800 text-gray-300 font-semibold p-4 z-40 transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 lg:relative w-[300px] lg:w-64`}
          
        >
          <ul className="flex flex-col items-center">
            <div className="flex flex-col items-center mb-4">
              <CustomerPicture />
              <p className="font-bold italic text-xl text-center mt-2">
                Nima Ch
              </p>
            </div>

            {/* Menu Items */}
            {menuItems.map((item) => (
              <li key={item.path} className="w-full mt-1">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `py-2 rounded w-full flex justify-center items-center transition-all duration-300 ${
                      isActive ? "bg-gray-700 text-theme" : "hover:bg-gray-700"
                    }`
                  }
                  onClick={() => setIsOpen(false)} // Close menu on link click
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

            <FooterSideBar />
          </ul>
        </nav>

        {isOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </aside>
  );
}

export default SlideBar;
