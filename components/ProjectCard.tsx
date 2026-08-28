import Image from "next/image";
import Link from "next/link";
import MotionWrapper from "./animations/MotionWrapper";

export type Project = {
  slug: string;
  title: string;
  category: string;
  image?: string;

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
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-xl
        "
      >
        {/* Project Content */}
        <Link
          href={`/projects/${project.slug}`}
          className="
            group
            block
            p-8
            cursor-pointer
            active:scale-[0.99]
          "
        >
          <div
            className={`
              flex
              ${project.image ? "flex-col-reverse md:flex-row" : "flex-col"}
              gap-6
              md:gap-10
              items-start
            `}
          >
            {/* Left */}
            <div className="w-full flex-1">
              <h3
                className="
                  text-2xl
                  font-bold
                  transition-colors
                  group-hover:text-indigo-800
                "
              >
                {project.title}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                {project.category}
              </p>

              {/* Description */}
              <ul className="mt-6 space-y-2">
                {project.description.map((item) => (
                  <li key={item} className="text-gray-700">
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
                      <li key={item} className="text-gray-700">
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
                        bg-indigo-50
                        text-indigo-800
                        text-sm
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
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* View Project */}
              <div
                className="
                  mt-8
                  flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-indigo-800
                "
              >
                <span>View Project</span>

                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </div>
            </div>

            {/* Image */}
            {project.image && (
              <div
                className="
                  relative
                  w-full
                  md:w-1/3
                  aspect-[16/9]
                  overflow-hidden
                  rounded-xl
                "
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />
              </div>
            )}
          </div>
        </Link>

        {/* Resources */}
        {project.links && (
          <div className="px-8 pb-8">
            <div className="pt-6 border-t">
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
                    className="
                      text-sm
                      text-indigo-800
                      hover:underline
                    "
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </MotionWrapper>
  );
}