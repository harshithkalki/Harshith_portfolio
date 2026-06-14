import { FiGithub } from "react-icons/fi";

const Projects = () => {
  const projects = [
    {
      name: "SmartApply — AI Job Search Automation",
      img: "/smartApply.png",
      description:
        "SmartApply An AI-powered job search automation platform that scrapes Indeed listings, scores resume-job fit using GPT-4o, and generates cover letters built on an event-driven pipeline with AWS SQS, BullMQ, and PostgreSQL.",
      techStack: [
        "React",
        "Node.ts",
        "PostgreSQL",
        "AWS SQS",
        "BullMQ",
        "OpenAI GPT-4o",
        "Puppeteer",
        "Docker",
      ],
      link: "https://github.com/harshithkalki/SmartApply",
    },
    {
      name: "ResumeVault — Job Application Tracker",
      img: "/project_files/resumeVault.png",
      description:
        "ResumeVault A full-stack job application tracker with JWT authentication, status management, and direct-to-S3 document uploads via presigned URLs, deployed on AWS EC2 with a CloudFront-served React frontend.",
      techStack: [
        "React",
        "TypeScript",
        "Express",
        "PostgreSQL",
        "AWS S3",
        "AWS EC2",
        "Docker",
      ],
      link: "https://github.com/harshithkalki/jobTracker-ui",
    },
    {
      name: "RadixStaker — Blockchain Portfolio Dashboard",
      img: "/radixStaker.png",
      description:
        "RadixStaker A real-time blockchain portfolio dashboard for the Radix DLT network, visualizing epoch-based staking data, validator metrics, and wallet performance through GraphQL APIs",
      techStack: ["Django", "React", "MySQL"],
      link: "https://radixstaker.com/",
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
            <div className=" flex w-full mt-16">
              <div className="w-full md:w-[60%] min-h-46 md:min-h-[30vh] bg-[#153445] rounded-lg flex items-center justify-center">
                {/* <h3 className="text-2xl font-medium text-[#3de0d0]">
                  {"</ >"}
                </h3> */}
                <img
                  src={project.img}
                  alt={project.name}
                  className="overflow-hidden rounded-md  w-full h-full"
                />
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
                      className="text-sm text-[#7487a3]] px-2 py-1 rounded overflow-visible whitespace-nowrap"
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
