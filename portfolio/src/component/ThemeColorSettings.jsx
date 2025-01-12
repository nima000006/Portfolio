import { FaCog } from "react-icons/fa";
import { useState } from "react";

const colorItems = [
  { name: "#6610f2" },
  { name: "#007bff" },
  { name: "#6f42c1" },
  { name: "#17a2b8" },
  { name: "#dc3545" },
  { name: "#e83e8c" },
  { name: "#28a745" },
  { name: "#ffc107" },
  { name: "#fd7e14" },
  { name: "#795548" },
];

function ThemeColorSettings() {
  const [,setSelectedColor] = useState("#28a745"); // default green-500 color

  const handleColorChange = (color) => {
    setSelectedColor(color);
    document.documentElement.style.setProperty("--theme-color", color); // Apply to the root element
  };

  const resetColor = () => {
    setSelectedColor("#28a745"); // Reset to default color
    document.documentElement.style.setProperty("--theme-color", "#28a745");
  };

  return (
    <div className="fixed top-[50%] z-20 right-[-202px] hover:right-[0] transition-all flex">
      <div className=" cursor-pointer bg-slate-700 w-8 h-8 rounded-l-md flex items-center justify-center">
        <FaCog width={100} className="text-slate-100" />
      </div>
      <div className="w-[202px] p-5 bg-slate-100">
        <p className=" border-b-2 border-b-slate-300 pb-3 mb-5">Color switch</p>
        <ul className="flex flex-wrap gap-2">
          {colorItems.map((color) => (
            <li
              key={color.name}
              style={{ background: color.name }}
              className="w-[22px] h-[22px] rounded-full cursor-pointer"
              onClick={() => handleColorChange(color.name)}
            ></li>
          ))}
          <button
            onClick={resetColor}
            className="w-full h-7 flex justify-center items-center flex-nowrap text-sm mt-3 text-green-100 bg-theme"
          >
            Reset Default Teal
          </button>
        </ul>
      </div>
    </div>
  );
}

export default ThemeColorSettings;
