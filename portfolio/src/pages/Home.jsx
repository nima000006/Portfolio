import { NavLink } from "react-router";
import Typewriter from "typewriter-effect";
import AnimateNextPage from "../component/AnimateNextPage";
import { createPortal } from "react-dom";

function Home() {
  return (
    <div className="relative bg-hero-pattern-home bg-cover text-center bg-center bg-no-repeat h-full min-h-screen w-full flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-slate-900 opacity-80 z-10"></div>
      <p className="text-gray-300 z-20 font-bold text-3xl mb-16">Welcome</p>
      <div className="relative z-20 text-gray-300 font-bold text-6xl">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("I'm Nima")
              .pauseFor(1000)
              .deleteAll()
              .typeString("I'm React developer")
              .pauseFor(1000)
              .deleteAll()
              .start();
          }}
          options={{
            loop: true,
          }}
        />
      </div>
      <p className="text-gray-300 z-20 font-bold text-3xl mt-16">
        based in Tehran, Iran.
      </p>
      <NavLink
        to="/contact" // Replace with your desired route
        className="border-2 z-20 rounded-3xl border-theme font-semibold text-theme px-5 py-3 transition-all hover:bg-theme hover:text-green-100 mt-16"
      >
        Hire Me
      </NavLink>
      {createPortal(<AnimateNextPage href={"/about"} />, document.body)}
    </div>
  );
}

export default Home;
