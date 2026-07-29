import Card from "./Card";
import TechStack from "./TechStack";

import {
    profile,
    researchInterests,
    skills
} from "./data";

export default function About() {
  return (
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


      <div className="grid md:grid-cols-2 gap-6">
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
  );
}