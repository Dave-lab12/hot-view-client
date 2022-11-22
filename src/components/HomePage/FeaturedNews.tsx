import React from "react";
import Image from "next/image";

import NewsInfo from "./NewsInfo";
import NewsHeading from "./NewsHeading";
import NewsDescription from "./NewsDescription";

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
          <NewsInfo displayInfo={newsCategory} />
          <NewsInfo displayInfo={postedBy} />
          <NewsInfo displayInfo={postedDate} />
        </div>
        <div className="px-3 py-4">
          <NewsHeading title={title} />
          <NewsDescription description={description} />
        </div>
      </div>
    </div>
  );
}

export default FeaturedNews;
