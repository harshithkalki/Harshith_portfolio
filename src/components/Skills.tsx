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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {techStack.map((stack) => (
          <div className="w-[80vw] md:w-55 md:h-full p-6 bg-[#0b111f] border border-[#161e2e] hover:border-[#3de0d0] mt-10 rounded-lg">
            <h3 className="text-lg font-medium text-[#3de0d0] mb-4">
              {stack.name}
            </h3>
            <ul className="list-disc list-inside text-[#7487a3]">
              {stack.techs.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
