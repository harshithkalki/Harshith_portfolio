import { FiGithub } from "react-icons/fi";

const Projects = () => {
  const projects = [
    {
      name: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      techStack: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      name: "Project 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      techStack: ["Next.js", "Express", "PostgreSQL"],
      link: "#",
    },
    {
      name: "Project 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      techStack: ["Django", "React", "MySQL"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="w-screen md:max-w-5xl mx-auto px-6 py-20">
      <pre className="text-2xl font-semibold">
        <span className="font-normal text-[#3de0d0]">03. </span>Things I've
        Built
      </pre>
      <div className="flex flex-col w-full">
        {projects.map((project) => (
          <>
            {/* project1 display */}
            <div className=" flex w-full mt-20">
              <div className="w-full md:w-[60%] min-h-46 md:min-h-[30vh] bg-[#153445] rounded-lg flex items-center justify-center">
                <h3 className="text-2xl font-medium text-[#3de0d0]">
                  {"</ >"}
                </h3>
              </div>
              <div className="hidden md:flex min-w-[40%] min-h-[30vh]bg-amber-400 "></div>
            </div>
            {/* project1 description */}
            <div className=" flex w-full mt-8">
              <div className="hidden md:flex min-w-[40%] min-h-[30vh]"></div>
              <div className="w-full md:w-[60%] min-h-46 md:min-h-[30vh] p=6  ">
                <span className="font-mono text-sm text-[#3de0d0]">
                  Featured Project
                </span>
                <h3 className="text-xl font-mono font-medium ">
                  {project.name}
                </h3>
                <p className="text-[#7487a3] mt-4 border border-[#161e2e] bg-[#0b111f] p-3 rounded-lg">
                  {project.description}
                </p>
                <div className="flex gap-4 mt-4 font-mono">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm text-[#7487a3]  ] px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="mt-2 p-2 text-white hover:text-[#3de0d0] rounded-md">
                    <FiGithub className="text-xl" />
                  </button>
                </a>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Projects;
