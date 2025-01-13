import ProgressBar from "./ProgressBar";

function SkillsProgressBar() {
  const skills = [
    { label: "HTML/CSS", percent: 95 },
    { label: "JavaScript", percent: 70 },
    { label: "React JS", percent: 80 },
    { label: "Typescript", percent: 60 },
    { label: "Next js", percent: 50 },
    { label: "Bootstrap", percent: 99 },
    { label: "MUI", percent: 80 },
    { label: "Tailwind", percent: 80 },
    { label: "Git", percent: 60 },
  ];

  return (
    <div className="p-5 w-full z-20 relative">
      <p className="text-green-50 font-semibold text-2xl mb-5">My Skills</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap:4 md:gap-6">
        {skills.map((skill, index) => (
          <ProgressBar
            key={index}
            percent={skill.percent}
            label={skill.label}
          />
        ))}
      </div>
    </div>
  );
}

export default SkillsProgressBar;
