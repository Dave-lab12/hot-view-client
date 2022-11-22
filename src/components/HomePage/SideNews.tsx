import React from "react";
import Image from "next/image";

import NewsInfo from "../NewsComponents/NewsInfo";
import NewsHeading from "../NewsComponents/NewsHeading";

interface IProps {
  imageUrl: string;
  newsDate: string;
  readingTime: number;
  title: string;
  imageWidth?: number;
  imageHieght?: number;
  sideNewsClass?: string;
}

function SideNews({
  imageUrl,
  newsDate,
  readingTime,
  title,
  imageWidth,
  imageHieght,
  sideNewsClass,
}: IProps) {
  return (
    <div className={`flex flex-row flex-grow ${sideNewsClass}`}>
      <div>
        <Image
          src={imageUrl}
          alt="News image"
          width={imageWidth}
          height={imageHieght}
        />
      </div>
      <div className="grid grid-flow-col px-5 py-2">
        <div className="flex flex-row flex-grow">
          <NewsInfo displayInfo={newsDate} />
          <NewsInfo displayInfo={`${readingTime} mins read`} />
        </div>
        <NewsHeading title={title} />
      </div>
    </div>
  );
}

export default SideNews;
