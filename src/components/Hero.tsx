import CodeBox from "./CodeBox";

const Hero = () => {
  return (
    <div className="relative" id="home">
      <div className="flex mx-auto max-w-7xl items-center min-h-screen md:min-h-[90vh] xl:px-0 px-8 text-wrap">
        <div>
          <div className="text-[#3de0d0] text-lg font-sans ">
            Hi, my name is
          </div>
          <div className="text-5xl md:text-7xl font-sans font-medium my-2">
            Harshith Chiluka.
          </div>
          <div className="text-4xl md:text-6xl font-medium text-[#7487a3] pb-8 text-wrap">
            I build things for the web.
          </div>
          <CodeBox />
          <a
            href="https://github.com/harshithkalki"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="p-3 mt-6 bg-[#3edece] text-base text-black rounded-md cursor-pointer">
              View My Work
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
