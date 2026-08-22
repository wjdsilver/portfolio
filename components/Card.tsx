import { ReactNode } from "react";


type CardProps = {
  title: string;
  children: ReactNode;
};


export default function Card({
  title,
  children
}: CardProps) {


  return (
    <div
      className="
        rounded-2xl
        bg-white
        p-6
        shadow
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <h3 className="mb-6 text-sm font-medium uppercase tracking-wider text-gray-500">
        {title}
      </h3>

      {children}
    </div>
  );
}