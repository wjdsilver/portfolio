"use client";

import { useState } from "react";

type Section = {
  id: string;
  title: string;
};

type FloatingTOCProps = {
  sections: Section[];
};

export default function FloatingTOC({
  sections,
}: FloatingTOCProps) {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="
        hidden
        lg:flex
        fixed
        right-6
        top-1/2
        -translate-y-1/2
        z-40
        items-center
        p-4
      "
    >
      {/* Dot Indicator */}
      <div className="flex flex-col gap-3">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="
              w-2.5
            h-2.5
            rounded-full
            bg-gray-300
            hover:bg-blue-700
            hover:scale-125
            transition-all
            duration-200
            "
            aria-label={section.title}
          />
        ))}
      </div>

      {/* Expand Menu */}
      <div
        className={`
          absolute
          right-12
          transition-all
          duration-200
          ${
            open
              ? "opacity-100 translate-x-0 pointer-events-auto"
              : "opacity-0 translate-x-5 pointer-events-none"
          }
        `}
      >
        <div
          className="
            w-48
            rounded-2xl
            border
            border-gray-200
            bg-white
            shadow-lg
            p-5
          "
        >
          <p
            className="
              text-sm
              font-semibold
              mb-4
              text-gray-800
            "
          >
            목차
          </p>

          <div className="space-y-3">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="
                  block
                  text-sm
                  text-gray-500
                  hover:text-blue-700
                  transition
                "
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}