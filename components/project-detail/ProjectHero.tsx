"use client";

import Link from "next/link";
import MotionWrapper from "../animations/MotionWrapper";

function HeroImage({
  image,
  title,
  imageClassName = "",
}: {
  image: string;
  title: string;
  imageClassName?: string;
}) {
  return (
    <div
      className="
        overflow-hidden
        rounded-3xl
        transition-all
        duration-300
      "
    >
      <img
  src={image}
  alt={title}
  className={`block w-full h-full object-cover object-center ${imageClassName}`}
/>
    </div>
  );
}

type Conference = {
  name: string;
  url?: string;
};

type ProjectHeroProps = {
  category: string;
  title: string;
  duration: string;
  description: string;
  image?: string;
  imageClassName?: string;

  conferences: Conference[];

  techStack: string[];
};

export default function ProjectHero({
  category,
  title,
  duration,
  description,
  image,
  imageClassName,
  conferences,
  techStack,
}: ProjectHeroProps) {
  return (
    <MotionWrapper>
      <section className="max-w-6xl mx-auto px-8 pt-2 pb-24 ">

        {/* Main Content */}

          <div
          className={`
            mt-10
            grid
            ${image ? "lg:grid-cols-2 gap-14" : "grid-cols-1"}
            items-start
          `}
        >

          {/* Left */}

          <div>

            <p className="text-indigo-800 font-semibold tracking-wide uppercase">
              {category}
            </p>

            <h1
              className="
                mt-3
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-bold
                leading-tight
              "
            >
              {title}
            </h1>

            <p className="mt-6 text-gray-500">
              {duration}
            </p>

            {/* Mobile Image */}
            {image && (
              <div className="mt-8 lg:hidden max-w-xl mx-auto">
                <HeroImage
                  image={image}
                  title={title}
                  imageClassName={imageClassName}
                />
              </div>
            )}

            

            <p className="mt-8 leading-8 text-gray-700">
              {description}
            </p>

            {/* Conference */}

            <div className="flex flex-wrap gap-3 mt-8">

              {conferences.map((conference) =>
                conference.url ? (
                  <a
                    key={conference.name}
                    href={conference.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      px-4
                      py-2
                      rounded-full
                      bg-indigo-50
                      text-indigo-800
                      text-sm
                      transition-all
                      duration-300
                      hover:bg-indigo-100
                      hover:-translate-y-0.5
                    "
                  >
                    {conference.name}
                  </a>
                ) : (
                  <span
                    key={conference.name}
                    className="
                      px-4
                      py-2
                      rounded-full
                      bg-indigo-50
                      text-indigo-800
                      text-sm
                    "
                  >
                    {conference.name}
                  </span>
                )
              )}

            </div>

            {/* Tech Stack */}

            <div className="mt-10">

              <h3 className="font-semibold mb-4">
                기술 스택
              </h3>

              <div className="flex flex-wrap gap-3">

                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-3
                      py-1.5
                      rounded-full
                      shadow
                      bg-white
                      text-sm
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:shadow-md
                    "
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </div>

          </div>

          {/* Right (Desktop Only) */}
          {image && (
            <div className="hidden lg:block">
              <HeroImage
                image={image}
                title={title}
                imageClassName={imageClassName}
              />
            </div>
          )}

        </div>

      </section>
    </MotionWrapper>
  );
}