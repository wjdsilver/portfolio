"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");
  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-50

        px-3
        py-4
        md:px-10
        md:py-5

        bg-white/60
        backdrop-blur-md
        border-b
        border-indigo-50/70
      "
    >
      <div
        className="
          relative
          flex
          items-center
          justify-center
        "
      >

        {/* Navigation */}
        <div
          className="
            flex
            items-center
            gap-4
            text-sm
            whitespace-nowrap
            md:gap-8
            md:text-base
          "
        >
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#publications">Publications</a>
          <a href="#contact">Contact</a>
        </div>


        {/* Language */}
        <div
          className="
            absolute
            right-3
            md:right-0
            flex
            items-center
            gap-2
            text-xs
            md:text-sm
          "
        >
          <Link
            href="/"
            className={
              isEnglish
                ? "text-gray-400 transition-colors hover:text-indigo-800"
                : "font-semibold text-indigo-800"
            }
          >
            KR
          </Link>

          <span className="text-gray-300">|</span>

          <Link
            href="/en"
            className={
              isEnglish
                ? "font-semibold text-indigo-800"
                : "text-gray-400 transition-colors hover:text-indigo-800"
            }
          >
            EN
          </Link>
        </div>

      </div>
    </nav>
  );
}