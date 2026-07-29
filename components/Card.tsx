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