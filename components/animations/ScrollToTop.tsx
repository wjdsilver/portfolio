"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", onScroll);

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollTop}
      className="
        fixed
        bottom-8
        right-8

        w-12
        h-12

        bg-white/80

        backdrop-blur

        border
        border-gray-200

        shadow-lg

        hover:-translate-y-1


        rounded-full

        hover:shadow-xl

        transition-all
        duration-300
        
      "
    >
      <ArrowUp
        className="mx-auto"
        size={20}
      />
    </button>
  );
}