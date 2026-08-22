export default function Navbar() {
  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        
        px-3
        py-4
        md:px-10
        md:py-5
        z-50
        fixed
        
        bg-white/60
        backdrop-blur-md
        border-t
        border-indigo-50/70
      "
    >
      <div
        className="
          flex
          items-center
          justify-center
          gap-4
          text-sm
          whitespace-nowrap
          md:gap-8
          md:text-base
        "
      >
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#publications">Publications</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}