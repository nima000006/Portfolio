import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sampleData = [
  {
    id: 1,
    category: "Book store",
    title: "Libra books",
    image: "/book.png",
    href: "https://libra-books.com/",
  },
  {
    id: 2,
    category: "Book store",
    title: "Libra collections",
    image: "/collection.png",
    href: "https://libra-collections.com/",
  },
  {
    id: 3,
    category: "Infomation of books",
    title: "Blib",
    image: "/blib.png",
    href: "https://ils.blib.ir/",
  },
  {
    id: 4,
    category: "Infomation of books",
    title: "Iran docs",
    image: "/irandoc.png",
    href: "https://irandoc.ac.ir/",
  },
  {
    id: 5,
    category: "Introduction",
    title: "Yecom soft",
    image: "/yecom.png",
    href: "https://yecomsoft.com/",
  },
];

function FilterableGallery() {
  const [filter, setFilter] = useState("All");

  const filteredData =
    filter === "All"
      ? sampleData
      : sampleData.filter((item) => item.category === filter);

  return (
    <div className="p-8 bg-gray-900 min-h-screen">
      {/* Filter Buttons */}
      <div className="flex gap-6 justify-center text-gray-300 mb-6">
        {["All", "Book store", "Infomation of books", "Introduction"].map(
          (category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`${
                filter === category
                  ? "text-theme border-b-2 border-theme"
                  : "hover:text-theme"
              } transition-all duration-300`}
            >
              {category}
            </button>
          )
        )}
      </div>

      {/* Grid Gallery */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredData.map((item) => (
            <motion.div
              key={item.id}
              className="relative bg-gray-800 rounded-lg overflow-hidden"
              layout
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <a href={item.href}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-gray-300">{item.category}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default FilterableGallery;
