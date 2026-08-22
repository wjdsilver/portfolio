const stacks = [
  {
    category: "Programming",
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
    ],
  },
  {
    category: "AI / ML",
    skills: [
        "OpenCV",
      "PyTorch",
      "Scikit-learn",
    ],
  },
  {
    category: "Web / System",
    skills: [
      "Next.js",
      "React",
      "FastAPI",
      "Git / GitHub",
    ],
  },
  {
    category: "Research",
    skills: [
      "Graph ML",
      "DOM Analysis",
      "LLM",
      "AI Security",
    ],
  },
];


export default function TechStack() {
  return (
    <section className="px-4 md:px-10 py-20">

      <h2 className="text-3xl font-bold mb-10">
        Tech Stack
      </h2>


      <div className="space-y-8">

        {stacks.map((stack) => (
          <div key={stack.category}>

            <h3 className="mb-3 text-sm font-medium uppercase tracking-wide text-gray-500">
              {stack.category}
            </h3>


            <div className="flex flex-wrap gap-3">

              {stack.skills.map((skill)=>(
                <span
                key={skill}
                className="
                  rounded-full
                  shadow
                  border
                  border-indigo-50
                  bg-white
                  px-4 py-2
                  text-sm
                  font-medium
                  text-gray-700
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