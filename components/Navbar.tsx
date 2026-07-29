export default function Navbar() {
  return (
    <nav className="
        fixed
        top-0
        w-full
        bg-white/80
        backdrop-blur
        p-5
      ">

      <div className="flex gap-8 justify-center">

        <a href="#home">
          Home
        </a>

        <a href="#about">
          About
        </a>

        <a href="#projects">
          Projects
        </a>

        <a href="#publications">
          Publications
        </a>

        <a href="#contact">
          Contact
        </a>

      </div>

    </nav>
  );
}