import Card from "./Card";
import TechStack from "./TechStack";
import MotionWrapper from "./animations/MotionWrapper";


import {
    profile,
    researchInterests,
    languagesAndCertifications,
    skills
} from "./data";

export default function About() {
  return (
    <MotionWrapper>
    <section
      id="about"
      className="
        min-h-screen
        flex
        flex-col
        justify-center
        px-4 
        md:px-10
        scroll-mt-20
      "
    >

      <h2 className="text-4xl font-bold mb-10">
        About Me
      </h2>



      <div className="grid md:grid-cols-3 gap-6">
      
       {/* Profile */}
<Card title="Profile">
  <div className="space-y-6">
    <div>
      <p className="text-3xl font-semibold tracking-tight text-gray-900">
        Jungeun Kim
      </p>
      <p className="mt-2 text-sm text-gray-500">
        M.S. Student
      </p>
    </div>

    <div className="border-l-2 border-gray-200 pl-4">
      <p className="text-sm leading-6 text-gray-700">
        Computer Software Engineering
      </p>
      <p className="mt-1 text-xs text-gray-500">
        Hanyang University
      </p>
    </div>
  </div>
</Card>

            <Card title="Education">
  <div className="space-y-8">

    <div className="grid grid-cols-[120px_1fr] gap-6">
      <div className="text-sm text-gray-500">
        2025.3 – Present
      </div>

      <div>
        <h3 className="font-medium">
          M.S. in Computer and Software Engineering
        </h3>

        <p className="text-gray-600">
          Hanyang University
        </p>
      </div>
    </div>

    <div className="grid grid-cols-[120px_1fr] gap-6">
      <div className="text-sm text-gray-500">
        2021.3 – 2025.2
      </div>

      <div>
        <h3 className="font-medium">
          B.S. in IT Media Engineering
        </h3>

        <p>
          B.S. in Computer Engineering
        </p>

        <p className="text-gray-600">
          Duksung Women's University
        </p>
      </div>
    </div>

  </div>
</Card>

<Card title="Language & Certifications">
  <ul className="space-y-2">
    {languagesAndCertifications.map((item) => (
      <li key={item}>
        {item}
      </li>
    ))}
  </ul>
</Card>

        </div>
        <TechStack />

    </section>
    </MotionWrapper>
  );
}