import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
function Section({ id, title }: { id: string; title: string }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-6 h-32 rounded-2xl border border-white/10 bg-white/5" />
    </section>
  );
}

function App() {
  return (
    <>
      <div className="min-h-screen text-white bg-[#080c17]">
        <div className="absolute top-60 -left-40 w-lg md:w-2xl h-168 bg-[#074a44] rounded-full blur-[160px] pointer-events-none" />
        {/* <div className="absolute -bottom-20 right-0 w-2xl h-168 bg-cyan-400/10 rounded-full blur-[160px] pointer-events-none" /> */}

        <NavBar />
        <Hero />
        <About />
        <Skills />

        {/* <Section id="about" title="About" /> */}
        {/* <Section id="skills" title="Skills" /> */}
        <Section id="projects" title="Projects" />
      </div>
    </>
  );
}

export default App;
