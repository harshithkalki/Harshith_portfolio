import CodeCard from "./CodeCard";

const About = () => {
  return (
    <>
      <section id="about" className="w-screen md:max-w-5xl mx-auto  px-6 py-20">
        <pre className="text-2xl font-semibold">
          <span className="font-normal text-[#3de0d0]">01. </span>About Me
        </pre>
        <div className="flex flex-col md:flex-row justify-around md:justify-between  items-center mt-8">
          <div className="mt-8 text-[#7487a3] w-[95%] md:w-[60%]">
            Hello! I'm Harshith, a full-stack developer passionate about
            building exceptional digital experiences. My journey in web
            development started back in 2018 when I decided to create my first
            Node.js API — turns out hacking together a REST server taught me a
            lot about how the web works! <br />
            <br />
            Fast-forward to today, and I've had the privilege of working at
            startups, digital agencies, and enterprise companies. My main focus
            these days is building scalable, accessible, and performant backend
            systems with Node.js and TypeScript. <br /> <br />I also love
            open-source and have contributed to several projects. When I'm not
            coding, you'll find me exploring new technologies, writing technical
            articles, or enjoying a good cup of coffee.
          </div>
          <div className="mt-16 md:mt-7">
            <CodeCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
