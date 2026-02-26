import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
// function Section({ id, title }: { id: string; title: string }) {
//   return (
//     <section id={id} className="mx-auto max-w-5xl px-6 py-20">
//       <h2 className="text-2xl font-semibold">{title}</h2>
//       <div className="mt-6 h-32 rounded-2xl border border-white/10 bg-white/5" />
//     </section>
//   );
// }

function App() {
  return (
    <>
      <div className="min-h-screen text-white bg-[#080c17] ">
        <NavBar />
        <Hero />

        {/* <Section id="about" title="About" />
        <Section id="skills" title="Skills" />
        <Section id="projects" title="Projects" /> */}
      </div>
    </>
  );
}

export default App;
