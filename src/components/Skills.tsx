const Skills = () => {
  const techStack = [
    {
      name: "Backend",
      techs: ["NodeJS", "ExpressJS", "Django", "Flask"],
    },
    {
      name: "Frontend",
      techs: ["React", "NextJS", "TailwindCSS", "TypeScript"],
    },
    {
      name: "Database",
      techs: ["MongoDB", "PostgreSQL", "MySQL"],
    },
    {
      name: "Tools",
      techs: ["Git", "Docker", "AWS", "CI/CD"],
    },
  ];

  return (
    <section id="skills" className="w-screen md:max-w-5xl mx-auto  px-6 py-20">
      <pre className="text-2xl font-semibold">
        <span className="font-normal text-[#3de0d0]">02. </span>Tech Stack
      </pre>
      <div className="flex flex-col md:flex-row justify-around md:justify-between items-center mt-8">
        <div className="w-[80vw] md:w-55 md:h-full p-4 bg-[#0b111f] border border-[#161e2e] hover:border-[#3de0d0] mt-10 rounded-lg">
          <h3 className="text-lg font-medium text-[#3de0d0] mb-4">
            {techStack[0].name}
          </h3>
          <ul className="list-disc list-inside text-[#7487a3]">
            {techStack[0].techs.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>

        <div className="w-[80vw] md:w-55 md:h-full  p-4 bg-[#0b111f] border border-[#161e2e] hover:border-[#3de0d0] mt-10 rounded-lg">
          <h3 className="text-lg font-medium text-[#3de0d0] mb-4">
            {techStack[1].name}
          </h3>
          <ul className="list-disc list-inside text-[#7487a3]">
            {techStack[1].techs.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>

        <div className="w-[80vw] md:w-55 md:min-h-full  p-4 bg-[#0b111f] border border-[#161e2e] hover:border-[#3de0d0] mt-10 rounded-lg">
          <h3 className="text-lg font-medium text-[#3de0d0] mb-4">
            {techStack[2].name}
          </h3>
          <ul className="list-disc list-inside text-[#7487a3]">
            {techStack[2].techs.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>

        <div className="w-[80vw] md:w-55  p-4 bg-[#0b111f] border border-[#161e2e] hover:border-[#3de0d0] mt-10 rounded-lg">
          <h3 className="text-lg font-medium text-[#3de0d0] mb-4">
            {techStack[3].name}
          </h3>
          <ul className="list-disc list-inside text-[#7487a3]">
            {techStack[3].techs.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
