import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
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
        <div className="absolute top-60 -left-40 w-[650px] h-[650px] bg-teal-400/20 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-[650px] h-[650px] bg-cyan-400/10 rounded-full blur-[160px] pointer-events-none" />

        <NavBar />
        <Hero />

        <Section id="about" title="About" />
        <Section id="skills" title="Skills" />
        <Section id="projects" title="Projects" />
      </div>
    </>
  );
}

export default App;
