type Props = {
  paragraphs: string[];
};


export default function ProjectOverview({
  paragraphs,
}: Props) {

  return (
    <section
      className="
        max-w-6xl
        mx-auto
        px-8
        py-20
      "
    >

      <h2 className="text-3xl font-bold mb-8">
        Project Overview
      </h2>


      <div className="space-y-5">

        {paragraphs.map((text, index)=>(
          <p
            key={index}
            className="
              text-gray-700
              leading-8
            "
          >
            {text}
          </p>
        ))}

      </div>


    </section>
  );
}