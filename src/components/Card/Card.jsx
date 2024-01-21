import React from "react";
import Link from "next/link";
import Image from "next/image";

const Card = ({ datas }) => {
  const imgUrl = process.env.NEXT_PUBLIC_BASE_IMG_URL;

  return (
    <div className="grid grid-cols-10 gap-4">
      {datas?.map((data, index) => {
        return (
          <Link
            key={index}
            href={`movie/${data.id}`}
            className="relative overflow-hidden group hover:scale-95 transition-all ease-in-out duration-300 border rounded-sm"
          >
            <div className="">
              <Image
                alt={data.title}
                src={`${imgUrl}${data.poster_path}`}
                width={100}
                height={100}
                className="w-auto h-auto object-cover group-hover:scale-125 transition-all ease-in-out duration-300"
              />
            </div>
            <div className="absolute w-full h-full -bottom-full group-hover:bottom-0 transition-all ease-in-out duration-300 left-0 bg-[rgba(0,0,0,0.6)] flex items-end text-center pb-4">
              <h1 className="font-semibold text-white text-xs text-center w-full">
                {data.title}
              </h1>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Card;
