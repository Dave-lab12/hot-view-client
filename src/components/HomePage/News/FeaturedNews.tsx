import React from "react";

import NewsDescription from "../../NewsComponents/NewsDescription";
import NewsInfo from "../../NewsComponents/NewsInfo";
import NewsHeading from "../../NewsComponents/NewsHeading";

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
    <>
      <div
        className="flex flex-col bg-cover bg-no-repeat h-full place-content-end text-white"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div className="flex flex-col place-content-end h-3/4 bg-gradient-to-t from-black to-transparent">
          <div className=" ">
            <div className="flex flex-row text-gray-200">
              <NewsInfo
                displayInfo={newsCategory}
                infoClass="pl-3 pr-4 hover:text-green-400 transition delay-100"
              />
              <NewsInfo
                displayInfo={postedBy}
                infoClass="px-4 hover:text-green-400 transition delay-100"
              />
              <NewsInfo
                displayInfo={postedDate}
                infoClass="px-4 hover:text-green-400 transition delay-100"
              />
            </div>
            <div className=" flex flex-col px-3 py-4">
              <NewsHeading title={title} />
              <NewsDescription description={description} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedNews;
