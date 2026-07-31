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
        bg-white
        rounded-xl
        shadow
        p-6

        transition-all
duration-300
hover:-translate-y-1
hover:shadow-xl
      "
    >

      <h3 className="text-2xl font-bold">
        {title}
      </h3>


      <div className="mt-4">
        {children}
      </div>


    </div>
  );
}