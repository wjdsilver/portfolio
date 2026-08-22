type Author = {
  name: string;
  highlight: boolean;
};

type PublicationCardProps = {
  title: string;
  authors: Author[];
  venue: string;
  year: string;
  status?: string;
  award?: string;
  description: string;
  paper?: string;
  code?: string;
};


export default function PublicationCard({
  title,
  authors,
  venue,
  year,
  status,
  award,
  description,
  paper,
  code
}: PublicationCardProps) {


  return (

    <div
      className="
      rounded-xl
      border 
      border-indigo-50
      bg-white
      p-6
      shadow-sm
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-lg
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
                <strong className="font-semibold text-indigo-800">
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


        <div className="mt-2 flex items-center gap-2 text-sm">
  <span className="text-gray-500">
    {venue} · {year}
  </span>

  {status && (
    <span className="text-gray-500">
      {status}
    </span>
  )}

  {award && (
    <span className="font-medium text-gray-800">
      🏆 {award}
    </span>
  )}
</div>


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
                rounded-xl
                border border-indigo-100
                bg-white
                px-4 py-2
                text-sm
                font-medium
                text-indigo-800
                shadow-sm
                transition-colors
                hover:bg-indigo-50
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
                rounded-xl
                bg-indigo-800
                px-4 py-2
                text-sm
                font-medium
                text-white
                shadow-sm
                transition-colors
                hover:bg-indigo-700
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