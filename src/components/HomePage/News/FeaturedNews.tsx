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
        className=" flex flex-col bg-cover h-full place-content-end text-white"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="bg-black bg-opacity-70 ">
          <div className="flex flex-row text-gray-400 ">
            <NewsInfo displayInfo={newsCategory} infoClass="px-4" />
            <NewsInfo displayInfo={postedBy} infoClass="px-4" />
            <NewsInfo displayInfo={postedDate} infoClass="px-4" />
          </div>
          <div className="px-3 py-4">
            <NewsHeading title={title} />
            <NewsDescription description={description} />
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedNews;
