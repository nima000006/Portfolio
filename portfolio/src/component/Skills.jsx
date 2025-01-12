/* eslint-disable react/prop-types */
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

function Skills({ title, description, icon }) {
  const renderIcon = (iconName) => {
    const Icon = FaIcons[iconName] || SiIcons[iconName];
    return Icon ? <Icon className="text-theme w-7 h-7" /> : null;
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-start p-4 bg-slate-800 rounded-lg shadow-lg hover:bg-slate-700 transition-all">
      <div className=" rounded-lg flex justify-center items-center mb-4 sm:mb-0">
        {renderIcon(icon)}
      </div>
      <div className="text-center sm:text-left text-slate-200">
        <p className="font-bold text-2xl mb-3">{title}</p>
        <p className="font-thin">{description}</p>
      </div>
    </div>
  );
}

export default Skills;
