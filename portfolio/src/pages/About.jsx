import Analytics from "../component/Analytics";
import AnimateNextPage from "../component/AnimateNextPage";
import DynamicTitle from "../component/DynamicTitle";

const analytics = [
  { title: "Years Experiance", number: "+4" },
  { title: "Happy Clients", number: "+10" },
  { title: "Projects Done", number: "+8" },
  { title: "Get Awards", number: "+3" },
];
function About() {
  return (
    <div className="relative bg-slate-900  w-full px-10">
      <DynamicTitle backText={"ABOUT ME"} title={"Know Me More"} />
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-6 mt-16 z-20">
        <div className="col-span-3 z-20">
          <h2 className="text-2xl font-bold mb-3 text-justify text-slate-200">
            I&apos;m <span className="text-theme">Nima Ch</span>, a Web
            Developer
          </h2>
          <p className="text-slate-500">
            With over 3 years of experience as a Front-End Developer at
            <a href="https://yecomsoft.com/" className="text-theme">
              &nbsp; Yecomsoft
            </a>
            &nbsp; Office, I specialized in creating responsive websites based
            on Figma designs. Utilizing tools like Bootstrap, jQuery, and
            JavaScript, I developed dynamic user interfaces, while collaborating
            with designers and backend developers using ASP.NET MVC and Razor
            Pages for robust application integration. My workflow involved
            translating Figma designs into functional websites, ensuring
            responsiveness, and maintaining efficiency through Git for version
            control.
          </p>
          <p className="text-slate-500">
            Currently, I am advancing my skills in React (intermediate level)
            and Next.js (intermediate level) with aspirations to transition into
            a full-stack JavaScript developer role. My goal is to leverage
            modern frameworks to build comprehensive web applications,
            contribute effectively to future projects, and take on more complex
            challenges in web development.
          </p>
        </div>

        <div className="col-span-2 z-20">
          <ul className="py-4 text-slate-200">
            <li className="border-b-[1px] py-3 mb-3 border-b-slate-500">
              Name: Nima Ch
            </li>
            <li className="border-b-[1px] py-3 mb-3 border-b-slate-500 ">
              Email:{" "}
              <a href="mailto:nimachehreh690@gmail.com">
                nimachehreh690@gmail.com
              </a>
            </li>
            <li className="border-b-[1px] py-3 mb-3 border-b-slate-500">
              Age: 34
            </li>
            <li className="border-b-[1px] py-3 mb-3 border-b-slate-500">
              From: Tehran, Iran
            </li>
          </ul>
          <button
            type="button"
            className="bg-theme text-green-100 p-3 rounded-3xl flex justify-center items-center"
          >
            Download CV
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 ">
        {analytics.map((item) => (
          <Analytics key={item.title} number={item.number} title={item.title} />
        ))}
      </div>
      <AnimateNextPage href="/lists-skills" />
    </div>
  );
}

export default About;
