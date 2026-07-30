import Image from "next/image";
import Link from "next/link";
import MotionWrapper from "./animations/MotionWrapper";

export type Project = {
  slug: string;
  title: string;
  category: string;
  image: string;

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

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <MotionWrapper>
    <div
      className="
        bg-white
        rounded-2xl
        shadow
        p-8

        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <div className="flex gap-10 items-start">

        {/* Left */}
        <div className="flex-1">

          <h3 className="text-2xl font-bold">
            {project.title}
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            {project.category}
          </p>

          {/* Description */}
          <ul className="mt-6 space-y-2">
            {project.description.map((item) => (
              <li
                key={item}
                className="text-gray-700"
              >
                • {item}
              </li>
            ))}
          </ul>

          {/* Contribution */}
          {project.contribution && (
            <div className="mt-8">

              <h4 className="font-semibold mb-3">
                주요 기여
              </h4>

              <ul className="space-y-2">

                {project.contribution.map((item) => (
                  <li
                    key={item}
                    className="text-gray-700"
                  >
                    ✓ {item}
                  </li>
                ))}

              </ul>

            </div>
          )}

          {/* Conference */}

          {project.conferences && (
            <div className="mt-4 flex flex-wrap gap-2">

              {project.conferences.map((item) => (
                <span
                  key={item}
                  className="
                    px-3
                    py-1
                    rounded-full
                    bg-blue-50
                    text-blue-700
                    text-sm

                    transition
                    hover:scale-105
                  "
                >
                  {item}
                </span>
              ))}

            </div>
          )}

          {/* Achievement */}

          {project.achievements && (
            <div className="mt-4 flex flex-wrap gap-2">

              {project.achievements.map((item) => (
                <span
                  key={item}
                  className="
                    px-3
                    py-1
                    rounded-full
                    bg-purple-50
                    text-purple-700
                    text-sm

                    transition
                    hover:scale-105
                  "
                >
                  {item}
                </span>
              ))}

            </div>
          )}

          {/* Technology */}

          <div className="mt-4 flex flex-wrap gap-2">

            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="
                  px-3
                  py-1
                  rounded-full
                  bg-green-50
                    text-green-700
                    text-sm

                    transition
hover:scale-105
                "
              >
                {tech}
              </span>
            ))}

          </div>

          {/* Resources */}

          {project.links && (

            <div className="mt-8 pt-6 border-t">

              <p
                className="
                  text-sm
                  font-semibold
                  text-gray-500
                  mb-3
                "
              >
                관련 자료
              </p>

              <div className="flex gap-3 flex-wrap">

                {project.links.map((link) => (

                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    
                  >
                    {link.label}
                  </a>

                ))}

              </div>

            </div>

          )}

          <Link
            href={`/projects/${project.slug}`}
            className="
              mt-8
              inline-flex
              items-center
              font-medium
              text-blue-600
              hover:underline
            "
          >
            자세히 보기 →
          </Link>

        </div>

        {/* Right */}

        <div className="w-80 flex-shrink-0">

          <Image
            src={project.image}
            alt={project.title}
            width={640}
            height={440}
            className="
              rounded-xl
              border
              object-cover
            "
          />

        </div>

      </div>

    </div>
    </MotionWrapper>
  );
}
