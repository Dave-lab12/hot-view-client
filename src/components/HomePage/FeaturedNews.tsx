import React from "react";
import Image from "next/image";

interface IProps {
  imageUrl: string;
  newsCategory: string;
  postedDate: string;
  postedBy: string;
  title: string;
  description: string;
}

function FeaturedNews({
  imageUrl,
  newsCategory,
  postedDate,
  postedBy,
  title,
  description,
}: IProps) {
  return (
    <div>
      <div
        className="flex flex-col bg-cover bg-no-repeat h-52 bg-gray-800 bg-opacity-25 place-content-end text-white"
        style={{ backgroundImage: `url(${imageUrl}  )` }}
      >
        <div className="flex flex-row text-gray-500">
          <h3 className="px-3 text-lg ">{newsCategory}</h3>
          <h3 className="pr-3 text-lg">{postedBy}</h3>
          <h3 className="pr-3 text-lg">{postedDate}</h3>
        </div>
        <div className="px-3 py-4">
          <h1 className="font-bold text-xl">{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default FeaturedNews;
