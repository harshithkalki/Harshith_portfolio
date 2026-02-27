const navItems = [
  {
    id: "about",
    label: "About",
  },
  {
    id: "skills",
    label: "Skills",
  },
  {
    id: "projects",
    label: "Projects",
  },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

const NavBar = () => {
  return (
    <>
      <header className="sticky top-0 z-50 bg-[rgb(9,14,26)] opacity-70 ">
        <div className="px-5 md:max-w-7xl mx-auto xl:px-8">
          <div className="py-6  justify-between items-center flex">
            <div className="font-mono  text-[#3edece] text-lg">{"<dev />"}</div>
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  className="font-mono hover:text-[#3de0d0] transition text-[#7689a3] text-sm"
                  onClick={() => scrollToSection(item.id)}
                >
                  <span className="text-[#3de0d0]">0{index + 1}. </span>
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
