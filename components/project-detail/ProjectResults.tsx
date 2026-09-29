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

type AdditionalResult = {
  title: string;
  description: string;
  metrics: Metric[];
};

type ProjectResultsProps = {
  title?: string;

  description?: string;

  metrics: Metric[];

  comparisons?: Comparison[];

  confusionMatrixImage?: string;

  additionalResult?: AdditionalResult;
};


export default function ProjectResults({
  title,
  description,
  metrics,
  comparisons = [],
  confusionMatrixImage,
  additionalResult,
}: ProjectResultsProps) {

  return (
    <MotionWrapper>

      <section
      id="results"
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
        {description && (
  <div className="mb-10">
    <h3
      className="
        text-2xl
        font-semibold
        mb-3
      "
    >
      {title}
    </h3>

    <p
      className="
        text-gray-600
        leading-7
        mb-10
      "
    >
      {description}
    </p>
  </div>
)}


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
                rounded-xl

                bg-white
                p-7
                text-center
                shadow

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
                  text-indigo-800
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

                rounded-xl

                bg-white

                shadow

                transition-all
                duration-300

                hover:shadow-xl
              "
            >

              <table className="w-full">

                <thead className="bg-indigo-50/50
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

      {/* Additional Result */}

{additionalResult && (
  <div className="mt-16">

    <h3
      className="
        text-2xl
        font-semibold
        mb-3
      "
    >
      {additionalResult.title}
    </h3>

    <p
      className="
        text-gray-600
        leading-7
        mb-8
      "
    >
      {additionalResult.description}
    </p>

    <div
      className="
        grid
        md:grid-cols-3
        gap-6
      "
    >

      {additionalResult.metrics.map((metric) => (

        <div
          key={metric.name}
          className="
            rounded-xl
            bg-white
            p-7
            text-center
            shadow

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
              text-indigo-800
            "
          >
            {metric.value}
          </p>

        </div>

      ))}

    </div>

  </div>
)}
      </section>


    </MotionWrapper>
  );
}