import MotionWrapper from "../animations/MotionWrapper";


type TroubleshootingItem = {
  problem: string;
  cause: string;
  solution: string;
  result?: string;
};


type ProjectTroubleshootingProps = {
  issues: TroubleshootingItem[];
};


export default function ProjectTroubleshooting({
  issues,
}: ProjectTroubleshootingProps) {

  return (
    <MotionWrapper>

      <section 
      id="troubleshooting"
      className="max-w-6xl mx-auto px-8 py-20">


        {/* Title */}

        <h2 className="text-3xl font-bold mb-8">
          Troubleshooting
        </h2>



        <div className="space-y-8">


          {issues.map((item, index) => (

            <div
              key={index}
              className="
                rounded-2xl
                border
                border-gray-200

                bg-white

                p-8

                shadow-sm


                transition-all
                duration-300

                hover:shadow-xl
              "
            >


              {/* Number */}

              <div
                className="
                  flex
                  items-center
                  gap-3
                  mb-6
                "
              >

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


                <h3 className="text-xl font-semibold">
                  Issue {index + 1}
                </h3>


              </div>




              {/* Content */}

              <div
                className="
                  grid
                  md:grid-cols-3
                  gap-6
                "
              >


                {/* Problem */}

                <div>

                  <p
                    className="
                      text-blue-700
                      font-semibold
                      mb-2
                    "
                  >
                    Problem
                  </p>

                  <p className="text-gray-700 leading-7">
                    {item.problem}
                  </p>

                </div>




                {/* Cause */}

                <div>

                  <p
                    className="
                      text-blue-700
                      font-semibold
                      mb-2
                    "
                  >
                    Cause
                  </p>

                  <p className="text-gray-700 leading-7">
                    {item.cause}
                  </p>

                </div>





                {/* Solution */}

                <div>

                  <p
                    className="
                      text-blue-700
                      font-semibold
                      mb-2
                    "
                  >
                    Solution
                  </p>


                  <p className="text-gray-700 leading-7">
                    {item.solution}
                  </p>


                </div>


              </div>



              {/* Result */}

              {item.result && (

                <div
                  className="
                    mt-8
                    pt-6
                    border-t
                  "
                >

                  <p
                    className="
                      text-blue-700
                      font-semibold
                      mb-2
                    "
                  >
                    Result
                  </p>


                  <p className="text-gray-700 leading-7">
                    {item.result}
                  </p>


                </div>

              )}



            </div>

          ))}


        </div>



      </section>


    </MotionWrapper>
  );
}