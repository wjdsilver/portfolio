import { ReactNode } from "react";
import MotionWrapper from "../animations/MotionWrapper";


type ArchitectureStep = {
  title: string;
  description: string;
};




type ProjectArchitectureProps = {
  pipeline?: ReactNode;
  steps: ArchitectureStep[];
};


export default function ProjectArchitecture({
  pipeline,
  steps,
}: ProjectArchitectureProps) {
  return (
    <MotionWrapper>

      <section className="max-w-6xl mx-auto px-8 py-20">


        {/* Title */}

        <h2 className="text-3xl font-bold mb-8">
          구현 과정
        </h2>



        {/* Architecture Image */}
{pipeline && (
        <div
          className="
            rounded-2xl
            border
            border-gray-200
            bg-white
            p-6

            shadow-sm

            transition-all
            duration-300

            hover:shadow-xl
          "
        >

          {pipeline}

        </div>
)}


        {/* Pipeline */}

        <div className="mt-16">


          <h3 className="text-2xl font-semibold mb-8">
            Research Pipeline
          </h3>



          <div
            className="
              grid
              md:grid-cols-2
              lg:grid-cols-3
              gap-6
            "
          >


            {steps.map((step, index) => (

              <div
                key={step.title}
                className="
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white

                  p-6

                  shadow-sm


                  transition-all
                  duration-300


                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >


                {/* Number */}

                <div
                  className="
                    w-10
                    h-10

                    flex
                    items-center
                    justify-center

                    rounded-full

                    bg-blue-50
                    text-blue-700

                    font-semibold
                  "
                >

                  {index + 1}

                </div>



                {/* Content */}

                <h4
                  className="
                    mt-5
                    text-lg
                    font-semibold
                  "
                >
                  {step.title}
                </h4>



                <p
                  className="
                    mt-3
                    text-gray-600
                    leading-7
                  "
                >
                  {step.description}
                </p>



              </div>

            ))}


          </div>


        </div>



      </section>


    </MotionWrapper>
  );
}