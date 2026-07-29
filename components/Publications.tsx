import PublicationCard from "./PublicationCard";

import {
  publications
} from "./data";


export default function Publications(){

  return (

    <section
      id="publications"
      className="
        min-h-screen
        px-10
        py-20
        scroll-mt-20
      "
    >


      <h2
        className="
          text-4xl
          font-bold
          mb-10
        "
      >
        Publications
      </h2>



      <div
        className="
          space-y-6
        "
      >

        {
          publications.map((publication)=>(
            
            <PublicationCard
              key={publication.title}

              title={publication.title}
              authors={publication.authors}
              venue={publication.venue}
              year={publication.year}
              description={publication.description}

              paper={publication.paper}
              code={publication.code}

            />

          ))
        }


      </div>


    </section>

  );

}