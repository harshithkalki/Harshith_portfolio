export default function CodeCard() {
  return (
    <div className="group relative w-[70vw] md:w-65">
      {/* BACK CARD */}
      <div
        className="
          absolute
          top-6 left-6
          w-full h-full
          rounded-xl
          bg-[#173f42]
          transition-all duration-300
          group-hover:top-8 group-hover:left-8
        "
      />

      {/* FRONT CARD */}
      <div
        className="
          relative
          z-10
          flex items-center justify-center
          w-full h-full
          rounded-xl
          border border-teal-400
          bg-[#181e2e]
          from-[#0f172a]
          to-[#111827]
          transition-all duration-300
          group-hover:-translate-y-1 group-hover:-translate-x-1
        "
      >
        <img
          src="/animoji.jpg"
          alt="code"
          className="object-contain overflow-hidden rounded-md opacity-90"
        />
        {/* <span className="text-5xl text-teal-400">{`</>`}</span> */}
      </div>
    </div>
  );
}
