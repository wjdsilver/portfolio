type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  link: string;
};


export default function ProjectCard({
  title,
  description,
  tech,
  link
}: ProjectCardProps) {


  return (

    <div
      className="
        bg-white
        rounded-xl
        shadow
        p-6
        hover:shadow-lg
        transition
      "
    >

      <h3 className="
        text-2xl
        font-bold
      ">
        {title}
      </h3>


      <p className="
        mt-4
        text-gray-600
      ">
        {description}
      </p>



      <div className="
        mt-4
        flex
        flex-wrap
        gap-2
      ">

        {
          tech.map((item)=>(
            <span
              key={item}
              className="
                px-3
                py-1
                bg-gray-100
                rounded-full
                text-sm
              "
            >
              {item}
            </span>
          ))
        }

      </div>


      <a
        href={link}
        className="
          inline-block
          mt-6
          underline
        "
      >
        View Project →
      </a>


    </div>

  );
}