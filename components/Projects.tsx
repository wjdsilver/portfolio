type Project = {
  title: string;
  category: string;
  description: string[];

  contribution?: string[];

  conferences?: string[];
  achievements?: string[];

  technologies: string[];
  
  links?: {
    label: string;
    url: string;
  }[];
};


const projects: Project[] = [
  {
    title: "Graph-based Phishing Detection",
    category: "AI Security Research",
    description: [
      "DOM Tree → Graph Transformation",
      "WL Subtree Feature Extraction",
      "Random Forest Classification",
    ],
    contribution: [
    "Designed DOM graph-based phishing detection pipeline",
    "Extracted WL subtree structural features",
    "Conducted ML-based performance evaluation",
    ],

    conferences: [
      "KCC 2026",
      "ICONIP 2026",
    ],
    technologies: [
      "Python",
      "NetworkX",
      "Scikit-learn",
    ],

    links: [
    {
      label: "Paper",
      url: "논문링크",
    },
    {
      label: "Code",
      url: "Github링크",
    },
    {
      label: "Poster",
      url: "포스터링크",
    },
    ],
  },


  {
    title: "LLM-generated Phishing Dataset Construction",
    category: "Generative AI Security",
    description: [
      "Synthetic phishing HTML generation using LLM",
      "Attack scenario-based dataset construction",
      "Evaluation of LLM-generated phishing patterns",
    ],
    conferences: [
      "ICONIP 2026",
    ],
    technologies: [
      "LLM",
      "Python",
      "HTML Analysis",
    ],
  },


  {
  title: "safeT: AI-based Smart E-Scooter Safety System",
  category: "AI Computer Vision / Embedded System",
  description: [
    "Face recognition based user authentication",
    "Helmet and multi-rider detection using YOLOv8",
    "Road environment detection for safe riding",
  ],
  achievements: [
    "2024 EVE ICT Mentoring Bronze Award",
    "ACK 2024 Conference Paper",
  ],
  technologies: [
    "Python",
    "OpenCV",
    "YOLOv8",
    "Google Colab",
  ],
},

  {
    title: "AI-based Interview Attitude Analysis Service",
    category: "AI Application / Computer Vision",
    description: [
        "Gaze tracking based on facial landmark detection",
        "Voice feature analysis for interview feedback",
        "AI-based interview report generation",
    ],
    achievements: [
        "2024 EVE ICT Mentoring Award",
    ],
    technologies: [
        "Python",
        "OpenCV",
        "dlib",
        "AI",
    ],
    },



  {
    title: "AI Research Portfolio Website",
    category: "Web Engineering",
    description: [
      "Research-oriented portfolio website development",
      "Component-based architecture using Next.js",
      "Responsive UI design with Tailwind CSS",
    ],
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
    ],
    links: [
    {
      label: "Paper",
      url: "논문링크",
    },
    {
      label: "Code",
      url: "Github링크",
    },
    {
      label: "Poster",
      url: "포스터링크",
    },
    ],
  },
];



export default function Projects() {

  return (
    <section className="
    py-20
    px-10
    scroll-mt-20">


      <h2 className="
        text-4xl
        font-bold
        mb-10
      ">
        Projects
      </h2>



      <div className="
        grid
        gap-8
      ">


        {
          projects.map((project)=>(
            
            <div
              key={project.title}
              className="
                bg-white
                rounded-xl
                shadow
                p-6
              "
            >


              {/* Title */}
              <h3 className="
                text-xl
                font-bold
              ">
                {project.title}
              </h3>



              {/* Category */}
              <p className="
                mt-1
                text-sm
                text-gray-500
              ">
                {project.category}
              </p>



              {/* Description */}
              <ul className="
                mt-4
                space-y-2
              ">

                {
                  project.description.map((item)=>(
                    <li
                      key={item}
                      className="text-gray-700"
                    >
                      • {item}
                    </li>
                  ))
                }

              </ul>

                {/* Contribution */}

                {
                project.contribution && (
                    <div className="mt-6">

                    <h4 className="
                        font-semibold
                        mb-3
                    ">
                        My Contribution
                    </h4>


                    <ul className="
                        space-y-2
                        text-gray-700
                    ">

                        {
                        project.contribution.map((item)=>(
                            <li key={item}>
                            ✓ {item}
                            </li>
                        ))
                        }

                    </ul>

                    </div>
                )
                }

              {/* Conference Badge */}
              {
                project.conferences && (
                  <div className="
                    mt-6
                    flex
                    flex-wrap
                    gap-3
                  ">

                    {
                      project.conferences.map((conf)=>(
                        <span
                          key={conf}
                          className="
                            px-3
                            py-1
                            rounded-full
                            bg-blue-50
                            text-blue-700
                            text-sm
                          "
                        >
                          {conf}
                        </span>
                      ))
                    }

                  </div>
                )
              }

              {/* Achievement */}
                {
                project.achievements && (
                    <div className="
                    mt-4
                    flex
                    flex-wrap
                    gap-3
                    ">

                    {
                        project.achievements.map((item)=>(
                        <span
                            key={item}
                            className="
                            px-3
                            py-1
                            rounded-full
                            bg-purple-50
                            text-purple-700
                            text-sm
                            "
                        >
                            {item}
                        </span>
                        ))
                    }

                    </div>
                )
                }

              {/* Technology Badge */}
              <div className="
                mt-6
                flex
                flex-wrap
                gap-2
              ">

                {
                  project.technologies.map((tech)=>(
                    <span
                      key={tech}
                      className="
                        px-3
                        py-1
                        rounded-full
                        border
                        text-sm
                      "
                    >
                      {tech}
                    </span>
                  ))
                }

              </div>



              {/* Links */}
                {
  project.links && (
    <div className="
      mt-8
      pt-6
      border-t
    ">

      <p className="
        text-sm
        font-semibold
        text-gray-500
        mb-3
      ">
        Resources
      </p>


      <div className="
        flex
        gap-3
      ">

      {
        project.links.map((link)=>(
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            className="
              text-sm
              text-gray-700
              hover:text-black
              underline
            "
          >
            {link.label}
          </a>
        ))
      }

      </div>

    </div>
  )
}



            </div>

          ))
        }


      </div>


    </section>
  );
}