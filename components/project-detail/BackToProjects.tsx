import Link from "next/link";

export default function BackToProjects() {
  return (
    <div
      className="
        max-w-6xl
        mx-auto
        px-8
        pb-20
        flex
        justify-end
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
        "
      >
        ← Back to Projects
      </Link>
    </div>
  );
}