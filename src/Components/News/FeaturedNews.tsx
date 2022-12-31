import React from "react";

import {
  NewsDescription,
  NewsHeading,
  NewsInfo,
} from "@/components/Ui/Typography";

interface IProps {
  imageUrl: string;
  newsCategory: string;
  postedDate: string;
  postedBy: string;
  title: string;
  description: string;
}

export const FeaturedNews = ({
  imageUrl,
  newsCategory,
  postedDate,
  postedBy,
  title,
  description,
}: IProps) => {
  return (
    <>
      <div
        className="flex flex-col bg-cover bg-no-repeat h-full place-content-end text-white"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div className="flex flex-col place-content-end items-start h-1/4 bg-gradient-to-t from-black to-transparent bg-opacity-100">
          <div>
            <div className="flex flex-row justify-between  sm:space-x-10 px-2 sm:px-3 text-gray-300">
              <NewsInfo
                displayInfo={newsCategory}
                infoClass=" hover:text-green-400 transition delay-100"
              />
              <NewsInfo
                displayInfo={postedBy}
                infoClass=" hover:text-green-400 transition delay-100"
              />
              <NewsInfo
                displayInfo={postedDate}
                infoClass=" hover:text-green-400 transition delay-100"
              />
            </div>
            <div className=" flex flex-col px-3 py-4">
              <NewsHeading title={title} />
              <NewsDescription
                description={description}
                descClass="text-gray-300"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
