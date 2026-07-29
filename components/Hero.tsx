export default function Hero() {
  return (
    <section
      id="home"
      className="
        min-h-screen 
        flex 
        flex-col 
        justify-center 
        items-center
      "
    >

      <h1 className="text-6xl font-bold">
        Jungeun Kim
      </h1>


      <h2 className="mt-6 text-2xl">
        M.S. Student in Computer and Software Engineering 
      </h2>


      <p className="mt-4 text-gray-600 text-center">
        Researching AI Security and Graph Machine Learning
        <br />
        with applications to Phishing Detection
      </p>


      <div className="mt-8 flex gap-4">

        <a
          href="#projects"
          className="
            px-6 py-3
            bg-black
            text-white
            rounded-lg
          "
        >
          View Projects
        </a>


        <a
          href="https://github.com/wjdsilver"
          className="
            px-6 py-3
            border
            rounded-lg
          "
        >
          GitHub
        </a>

      </div>

    </section>
  );
}