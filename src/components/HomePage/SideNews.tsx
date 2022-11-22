import React from "react";
import Image from "next/image";

import NewsInfo from "../NewsComponents/NewsInfo";
import NewsHeading from "../NewsComponents/NewsHeading";

interface IProps {
  imageUrl: string;
  newsDate: string;
  readingTime: number;
  title: string;
}

function SideNews({ imageUrl, newsDate, readingTime, title }: IProps) {
  return (
    <div className="flex flex-row flex-grow">
      <div>
        <Image src={imageUrl} alt="News image" />
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
