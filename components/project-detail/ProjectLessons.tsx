import MotionWrapper from "../animations/MotionWrapper";


type Lesson = {
  title: string;
  description: string;
};


type ProjectLessonsProps = {
  lessons: Lesson[];
};


export default function ProjectLessons({
  lessons,
}: ProjectLessonsProps) {

  return (
    <MotionWrapper>

      <section
      id="lessons"
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
          Lessons Learned
        </h2>



        <div className="space-y-6">

          {lessons.map((lesson, index) => (

            <div
              key={lesson.title}
              className="
                rounded-2xl
                border
                border-gray-200

                bg-white

                p-8

                shadow-sm

                transition-all
                duration-300

                hover:-translate-y-1
                hover:shadow-xl
              "
            >


              <div
                className="
                  flex
                  gap-5
                  items-start
                "
              >


                <div
                  className="
                    w-10
                    h-10
                    shrink-0

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



                <div>

                  <h3
                    className="
                      text-xl
                      font-semibold
                    "
                  >
                    {lesson.title}
                  </h3>


                  <p
                    className="
                      mt-3
                      text-gray-700
                      leading-8
                    "
                  >
                    {lesson.description}
                  </p>


                </div>


              </div>


            </div>

          ))}


        </div>


      </section>


    </MotionWrapper>
  );
}