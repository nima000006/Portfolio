import { FaDownload } from "react-icons/fa";
import BoxResume from "../component/BoxResume";
import ChildBoxResume from "../component/ChildBoxResume";
import DynamicTitle from "../component/DynamicTitle";
import SkillsProgressBar from "../component/SkillsProgressBar";
import AnimateNextPage from "../component/AnimateNextPage";

function Resume() {
  return (
    <div className="relative bg-slate-900 w-full px-10 pb-10">
      <DynamicTitle title={"Resume"} backText={"SUMMMARY"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6 mt-12 z-20 relative">
        <BoxResume title="My Experience">
          <ChildBoxResume
            date={"2020 - 2024"}
            title={"Yecomsoft"}
            subTitle={"Front end developer"}
            description={
              "With over 3 years of experience as a Front-End Developer at  Yecomsoft  Office, I specialized in creating responsive websites based on Figma designs. Utilizing tools like Bootstrap, jQuery, and JavaScript, I developed dynamic user interfaces, while collaborating with designers and backend developers using ASP.NET MVC and Razor Pages for robust application integration. My workflow involved translating Figma designs into functional websites, ensuring responsiveness, and maintaining efficiency through Git for version control."
            }
          />
        </BoxResume>
        <BoxResume title="My Education">
          <ChildBoxResume
            date={"2008 - 2014"}
            title={"IAU"}
            subTitle={"Civil engineering bachelor degree"}
            description={
              "I am not passionate about civil engineering, so I decided to change my field to programming through self-study. However, I completed and earned my degree in civil engineering."
            }
          />
        </BoxResume>
      </div>
      <SkillsProgressBar />
      <button
        type="button"
        className="text-slate-300  z-20 relative border border-slate-300 transition-all duration-300 hover:bg-slate-800 hover:border-slate-800 p-3 font-medium flex flex-nowrap rounded-3xl items-center"
      >
        Download CV <FaDownload className="mx-2" />
      </button>
      <AnimateNextPage href={"/portfolio"} />
    </div>
  );
}

export default Resume;
