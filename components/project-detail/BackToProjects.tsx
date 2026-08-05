import Link from "next/link";

export default function BackToProjects() {
  return (
    <div
      className="
        max-w-6xl
        mx-auto
        pb-10
        flex
      "
    >
      <Link
        href="/#projects"
        className="
          inline-flex
          items-center


          text-sm
          text-gray-500

          transition-colors
          duration-300

          hover:text-blue-700
          hover:-translate-x-1
        "
      >
        ← Back to Projects
      </Link>
    </div>
  );
}