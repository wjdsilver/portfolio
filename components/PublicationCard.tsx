type Author = {
  name: string;
  highlight: boolean;
};

type PublicationCardProps = {
  title: string;
  authors: Author[];
  venue: string;
  year: string;
  description: string;
  paper?: string;
  code?: string;
};


export default function PublicationCard({
  title,
  authors,
  venue,
  year,
  description,
  paper,
  code
}: PublicationCardProps) {


  return (

    <div
      className="
      transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        bg-white
        rounded-xl
        shadow
        p-6
      "
    >


      <h3
        className="
          text-xl
          font-bold
        "
      >
        {title}
      </h3>


      <p>
        {
        authors.map((author, index)=>(
            <span key={author.name}>

            {
                author.highlight ? (
                <strong>
                    {author.name}
                </strong>
                ) : (
                author.name
                )
            }

            {index !== authors.length - 1 && ", "}

            </span>
        ))
        }
        </p>


      <p className="mt-1 text-sm text-gray-500">
        {venue} · {year}
      </p>



      <p className="mt-4">
        {description}
      </p>



      <div className="
        mt-6
        flex
        gap-4
      ">


        {
          paper && (
            <a
              href={paper}
              className="
                px-4
                py-2
                border
                rounded-lg

                transition
                    hover:scale-105
              "
            >
              Paper PDF
            </a>
          )
        }



        {
          code && (
            <a
              href={code}
              className="
                px-4
                py-2
                bg-black
                text-white
                rounded-lg

                transition
                    hover:scale-105
              "
            >
              Code
            </a>
          )
        }


      </div>


    </div>

  );

}