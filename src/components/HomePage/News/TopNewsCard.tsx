import React from "react";
import Image from "next/image";
import NewsHeading from "@/components/NewsComponents/NewsHeading";
import NewsInfo from "@/components/NewsComponents/NewsInfo";
import Header from "@/components/Header";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";

interface IProps {
  imageUrl: string;
  title: string;
  postedBy: string;
  isVerified: boolean;
  views: string;
  postedDate: string;
  cardClass?: string;
}

function TopNewsCard({
  imageUrl,
  title,
  postedBy,
  isVerified,
  views,
  postedDate,
  cardClass = "",
}: IProps) {
  return (
    <div
      className={`flex flex-col space-y-2 hover:scale-105 transition delay-100 ease-in-out hover:shadow-lg hover:shadow-gray-600 ${cardClass}`}
    >
      <Image
        src={imageUrl}
        alt="Top news image"
        width={220}
        height={220}
        className="w-full"
        objectFit="contain"
      />
      <div className="flex flex-row items-center">
        <NewsHeading title={title} titleClass="text-blue-900 grow" />
        <i className="grow">3 dots</i>
      </div>

      <div className="flex flex-row text-gray-600">
        <NewsInfo displayInfo={postedBy} infoClass="pr-3 " />
        {isVerified && <i className="fa-solid fa-badge-check">v</i>}
      </div>

      <div className="flex flex-row text-gray-600">
        <NewsInfo displayInfo={`${views} views`} infoClass="pr-1" />
        <NewsInfo displayInfo={`${postedDate} ago`} infoClass="pl-1" />
      </div>
    </div>
  );
}

export default TopNewsCard;
