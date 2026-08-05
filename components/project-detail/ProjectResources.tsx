import MotionWrapper from "../animations/MotionWrapper";


type Resource = {
  title: string;
  description: string;
  url: string;
};


type ProjectResourcesProps = {
  resources: Resource[];
};


export default function ProjectResources({
  resources,
}: ProjectResourcesProps) {

  return (
    <MotionWrapper>

      <section
      id="resources"
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
          Related Resources
        </h2>



        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-4
            gap-6
          "
        >

          {resources.map((resource) => (

            <a
              key={resource.title}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"

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


              <div
                className="
                  w-12
                  h-12

                  flex
                  items-center
                  justify-center

                  rounded-full

                  bg-blue-50
                  text-blue-700

                  font-bold
                "
              >
                ↗
              </div>



              <h3
                className="
                  mt-5
                  text-xl
                  font-semibold
                "
              >
                {resource.title}
              </h3>



              <p
                className="
                  mt-3
                  text-gray-600
                  leading-7
                "
              >
                {resource.description}
              </p>



              <p
                className="
                  mt-5
                  text-sm
                  text-blue-700
                  font-medium
                "
              >
                View Resource →
              </p>


            </a>

          ))}


        </div>


      </section>


    </MotionWrapper>
  );
}