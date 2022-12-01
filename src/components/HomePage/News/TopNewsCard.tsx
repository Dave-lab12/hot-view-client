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
  views: number;
  postedDate: string;
}

function TopNewsCard({
  imageUrl,
  title,
  postedBy,
  isVerified,
  views,
  postedDate,
}: IProps) {
  return (
    <div className="grid grid-flow-row">
      <AspectRatio.Root ratio={16 / 9}>
        <Image
          src={imageUrl}
          alt="Top news image"
          width={250}
          height={250}
          objectFit="contain"
        />
      </AspectRatio.Root>

      <NewsHeading title={title} />

      <div className="flex flex-row">
        <NewsInfo displayInfo={postedBy} infoClass="pr-3" />
        {isVerified && <i className="fa-solid fa-badge-check"></i>}
      </div>

      <div className="flex flex-row">
        <NewsInfo displayInfo={views as unknown as string} infoClass="pr-1" />
        <i className="fa-solid fa-circle-small fa-xl"></i>
        <NewsInfo displayInfo={`${postedDate} ago`} infoClass="pl-1" />
      </div>
    </div>
  );
}

export default TopNewsCard;
