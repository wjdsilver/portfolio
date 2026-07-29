const stacks = [
  {
    category: "Programming",
    skills: [
      "Python",
      "C++",
      "JavaScript",
    ],
  },
  {
    category: "AI / ML",
    skills: [
      "PyTorch",
      "Scikit-learn",
      "NetworkX",
    ],
  },
  {
    category: "Web / System",
    skills: [
      "Next.js",
      "React",
      "Docker",
    ],
  },
  {
    category: "Research",
    skills: [
      "Graph ML",
      "DOM Analysis",
      "LLM",
    ],
  },
];


export default function TechStack() {
  return (
    <section className="py-20">

      <h2 className="text-3xl font-bold mb-10">
        Tech Stack
      </h2>


      <div className="space-y-8">

        {stacks.map((stack) => (
          <div key={stack.category}>

            <h3 className="text-lg font-semibold mb-4">
              {stack.category}
            </h3>


            <div className="flex flex-wrap gap-3">

              {stack.skills.map((skill)=>(
                <span
                  key={skill}
                  className="
                    px-4
                    py-2
                    rounded-full
                    bg-gray-100
                    text-gray-800
                    text-sm
                    font-medium
                    border
                    hover:bg-black
                    hover:text-white
                    transition
                  "
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>
        ))}

      </div>


    </section>
  );
}