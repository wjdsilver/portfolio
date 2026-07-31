import Card from "./Card";
import TechStack from "./TechStack";
import MotionWrapper from "./animations/MotionWrapper";


import {
    profile,
    researchInterests,
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
        px-10
        scroll-mt-20
      "
    >

      <h2 className="text-4xl font-bold mb-10">
        About Me
      </h2>


      <div className="grid md:grid-cols-3 gap-6
      ">
        {/* Profile */}
        <Card title="Profile">
            <p>
                Jungeun Kim
            </p>

            <p>
                M.S. Student
            </p>

            <p>
                Computer Software Engineering
            </p>

            </Card>

        <Card title="Education">

        <div className="space-y-8">

            <div className="flex gap-6">

            <div className="w-32 text-sm text-gray-500">
                2025.3 – Present
            </div>

            <div>
                <h3 className="text-black-600">
                M.S. in Computer and Software Engineering
                </h3>

                <p className="text-gray-600">
                Hanyang University
                </p>
            </div>

            </div>


            <div className="flex gap-6">

            <div className="w-32 text-sm text-gray-500">
                2021.3 – 2025.2
            </div>

            <div>
                <h3 className="text-black-600">
                B.S. in IT Media Engineering
                </h3>

                <p className="text-black-600">
                B.S. in Computer Engineering
                </p>

                <p className="text-gray-600">
                Duksung Womans University
                </p>
            </div>

            </div>

        </div>

        </Card>


        <Card title="Research Interest">

            <ul className="space-y-2">

                {
                researchInterests.map((item)=>(
                    <li key={item}>
                    {item}
                    </li>
                ))
                }

            </ul>

            </Card>

        </div>
        <TechStack />

    </section>
    </MotionWrapper>
  );
}