"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="
        min-h-screen 
        w-full
    flex
    flex-col
    justify-center
    items-center
    px-4
    md:px-10
    box-border
      "
      initial={false}
    animate={{ opacity: 1, y: 0 }}
    transition={{
        duration: 0.7,
        ease: "easeOut",
    }}
    >

      <h1 className="text-4xl md:text-6xl font-bold text-center">
        Jungeun Kim
      </h1>


      <h2 className="mt-6 text-lg md:text-2xl text-center">
        한양대학교 컴퓨터소프트웨어학과 석사과정
      </h2>


      <p className="mt-4 text-gray-600 text-center">
      AI와 데이터 기반 기술을 연구하고
        <br />
        실제 문제 해결에 적용하고 있습니다.
      </p>


      <div className="mt-8 flex flex-col sm:flex-row gap-4">

        <a
          href="#projects"
          className="
            px-6 py-3
            bg-black
            text-white
            rounded-lg
          "
        >
          프로젝트 보기
        </a>


        <a
          href="https://github.com/wjdsilver"
          className="
            px-6 py-3
            border
            rounded-lg
          "
        >
          GitHub
        </a>

      </div>

    </motion.section>
  );
}