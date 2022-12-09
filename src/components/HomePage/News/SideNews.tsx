import React from "react";
import Image from "next/image";

import NewsInfo from "../../NewsComponents/NewsInfo";
import NewsHeading from "../../NewsComponents/NewsHeading";

interface IProps {
  imageUrl: string;
  postedDate: string;
  readingTime: number;
  title: string;
  imageWidth?: number;
  imageHeight?: number;
  sideNewsClass?: string;
}

function SideNews({
  imageUrl,
  postedDate,
  readingTime,
  title,
  imageWidth = 230,
  imageHeight = 200,
  sideNewsClass = "",
}: IProps) {
  return (
    <div className={`flex flex-col sm:flex-row border-b pb-2 ${sideNewsClass}`}>
      <div>
        <Image
          src={imageUrl}
          alt="News image"
          width={imageWidth}
          height={imageHeight}
          className="object-cover"
        />
      </div>
      <div className="grid grid-flow-row px-0 sm:px-5 py-1 place-items-start w-full">
        <div className="flex flex-col md:flex-row place-content-stretch text-sm">
          <NewsInfo
            displayInfo={postedDate}
            infoClass="pr-3 text-gray-500 grow"
          />
          <NewsInfo
            displayInfo={`${readingTime} mins read`}
            infoClass="pr-3 text-gray-500 place-self-center grow"
          />
        </div>
        <NewsHeading title={title} titleClass="text-orange-800" />
      </div>
    </div>
  );
}

export default SideNews;
