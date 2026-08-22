import MotionWrapper from "../animations/MotionWrapper";


type Metric = {
  name: string;
  value: string;
};


type Comparison = {
  method: string;
  accuracy: string;
  recall: string;
  f1: string;
};


type ProjectResultsProps = {
  metrics: Metric[];

  comparisons?: Comparison[];

  confusionMatrixImage?: string;
};


export default function ProjectResults({
  metrics,
  comparisons = [],
  confusionMatrixImage,
}: ProjectResultsProps) {

  return (
    <MotionWrapper>

      <section
        className="
          max-w-6xl
          mx-auto
          px-8
          py-20
        "
      >

        <h2
          className="
            text-3xl
            font-bold
            mb-8
          "
        >
          결과 및 성능
        </h2>


        {/* Metrics */}

        <div
          className="
            grid
            md:grid-cols-3
            gap-6
          "
        >

          {metrics.map((metric) => (

            <div
              key={metric.name}
              className="
                rounded-2xl
                border
                border-gray-200

                bg-white
                p-7
                text-center
                shadow-sm

                transition-all
                duration-300

                hover:-translate-y-1
                hover:shadow-xl
              "
            >

              <p className="text-gray-500">
                {metric.name}
              </p>


              <p
                className="
                  mt-3
                  text-4xl
                  font-bold
                "
              >
                {metric.value}
              </p>


            </div>

          ))}

        </div>



        {/* Comparison */}

        {comparisons.length > 0 && (

          <div className="mt-16">

            <h3
              className="
                text-2xl
                font-semibold
                mb-6
              "
            >
              성능 비교
            </h3>


            <div
              className="
                overflow-x-auto

rounded-2xl

border
border-gray-200

bg-white

shadow-sm

transition-all
duration-300

hover:shadow-xl
              "
            >

              <table className="w-full">

                <thead className="bg-gray-50
                border-b
    border-gray-200">

                  <tr>

                    <th className="px-6 py-4 text-left">
                      Method
                    </th>

                    <th className="px-6 py-4 text-left">
                      Accuracy
                    </th>

                    <th className="px-6 py-4 text-left">
                      Recall
                    </th>

                    <th className="px-6 py-4 text-left">
                      F1-score
                    </th>

                  </tr>

                </thead>


                <tbody>

                  {comparisons.map((item) => (

                    <tr
                      key={item.method}
                      className="border-t
                      border-gray-200"
                    >

                      <td className="px-6 py-4">
                        {item.method}
                      </td>


                      <td className="px-6 py-4">
                        {item.accuracy}
                      </td>


                      <td className="px-6 py-4">
                        {item.recall}
                      </td>


                      <td className="px-6 py-4">
                        {item.f1}
                      </td>


                    </tr>

                  ))}

                </tbody>


              </table>

            </div>

          </div>

        )}



        {/* Confusion Matrix */}

        {confusionMatrixImage && (

          <div className="mt-16">

            <h3
              className="
                text-2xl
                font-semibold
                mb-6
              "
            >
              Confusion Matrix
            </h3>


            <div
              className="
                rounded-2xl

  border
  border-gray-200

  bg-white

  p-6

  shadow-sm
              "
            >

              <img
                src={confusionMatrixImage}
                alt="Confusion Matrix"
                className="
                  mx-auto
                  rounded-xl
                "
              />

            </div>

          </div>

        )}


      </section>


    </MotionWrapper>
  );
}