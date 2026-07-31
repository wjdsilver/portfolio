import MotionWrapper from "../animations/MotionWrapper";



type ProjectContributionsProps = {
  contributions: {
    title: string;
    description: string;
  }[];
};


export default function ProjectContributions({
  contributions,
}: ProjectContributionsProps) {

  return (
    <MotionWrapper>

      <section className="max-w-6xl mx-auto px-8 py-20">


        {/* Title */}

        <h2 className="text-3xl font-bold mb-8">
          My Contributions
        </h2>



        {/* Cards */}

        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >

          {contributions.map((item, index) => (

            <div
              key={item.title}
              className="
                rounded-2xl
                border
                border-gray-200

                bg-white

                p-7

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



              {/* Title */}

              <h3
                className="
                  mt-5
                  text-xl
                  font-semibold
                "
              >

                {item.title}

              </h3>



              {/* Description */}

              <p
                className="
                  mt-3
                  text-gray-600
                  leading-7
                "
              >

                {item.description}

              </p>


            </div>

          ))}


        </div>


      </section>


    </MotionWrapper>
  );
}