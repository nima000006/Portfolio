import { NavLink } from "react-router";
import CustomerPicture from "./CustomerPicture";
import FooterSideBar from "./FooterSideBar";

function SlideBar() {
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
    <nav className="h-full bg-gray-800 text-gray-300 font-semibold p-2 ">
      <ul className="flex justify-center flex-col items-center">
        <CustomerPicture />
        <p className="font-bold italic text-xl">Nima Ch</p>
        {menuItems.map((item) => (
          <li key={item.path} className="w-full mt-1">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                ` py-2 rounded w-full flex justify-center items-center transition-all duration-300 ${
                  isActive ? "bg-gray-700 text-theme" : "hover:bg-gray-700"
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
        <FooterSideBar />
      </ul>
    </nav>
  );
}

export default SlideBar;
