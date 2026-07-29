import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Publications from "@/components/Publications";
import Projects from "@/components/Projects";


export default function Home() {
  return (
    <main
      className="
        bg-gradient-to-br
        from-blue-50
        via-white
        to-indigo-100
      "
    >
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Publications />
      <Contact />
    </main>
  );
}