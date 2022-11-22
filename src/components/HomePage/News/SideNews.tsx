import React from "react";
import Image from "next/image";

import NewsInfo from "../../NewsComponents/NewsInfo";
import NewsHeading from "../../NewsComponents/NewsHeading";

interface IProps {
  imageUrl: string;
  postedDate: string;
  readingTime: number;
  title: string;
  imageWidth: number;
  imageHeight: number;
  sideNewsClass?: string;
}

function SideNews({
  imageUrl,
  postedDate,
  readingTime,
  title,
  imageWidth,
  imageHeight,
  sideNewsClass,
}: IProps) {
  return (
    <div className={`flex flex-row flex-grow ${sideNewsClass}`}>
      <div>
        <Image
          src={imageUrl}
          alt="News image"
          width={imageWidth}
          height={imageHeight}
          objectFit="contain"
        />
      </div>
      <div className="grid grid-flow-row px-5 py-2">
        <div className="flex flex-row">
          <NewsInfo displayInfo={postedDate} infoClass="pr-3 text-gray-500" />
          <NewsInfo
            displayInfo={`${readingTime} mins read`}
            infoClass="pr-3 text-gray-500 place-self-center"
          />
        </div>
        <NewsHeading title={title} titleClass="text-blue-900" />
      </div>
    </div>
  );
}

export default SideNews;
