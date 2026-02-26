import CodeBox from "./CodeBox";

const Hero = () => {
  return (
    <div className="relative ">
      <div className="flex mx-auto max-w-7xl items-center min-h-screen">
        <div>
          <div className="text-[#3de0d0] text-lg font-sans ">
            Hi, my name is
          </div>
          <div className="text-7xl font-sans font-medium my-2">
            Harshith Chiluka.
          </div>
          <div className="text-6xl font-medium text-[#7487a3] mb-6">
            I build things for the web.
          </div>
          <CodeBox />
        </div>
      </div>
    </div>
  );
};

export default Hero;
