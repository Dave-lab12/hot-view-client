import React from "react";
import Image from "next/image";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";

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
  imageWidth = 200,
  imageHeight = 200,
  sideNewsClass = "",
}: IProps) {
  return (
    <div className={`flex flex-row border-b pb-2 ${sideNewsClass}`}>
      <div>
        <Image
          src={imageUrl}
          alt="News image"
          width={imageWidth}
          height={imageHeight}
          className="object-cover"
        />
      </div>
      <div className="grid grid-flow-row px-5 py-1 w-full">
        <div className="flex flex-row place-content-stretch items-center text-sm">
          <NewsInfo
            displayInfo={postedDate}
            infoClass="pr-3 text-gray-500 grow"
          />
          <NewsInfo
            displayInfo={`${readingTime} mins read`}
            infoClass="pr-3 text-gray-500 place-self-center grow"
          />
        </div>
        <NewsHeading title={title} titleClass="text-orange-600" />
      </div>
    </div>
  );
}

export default SideNews;
