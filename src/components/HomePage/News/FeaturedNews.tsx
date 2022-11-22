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
    <div>
      <div
        className="flex flex-col bg-cover bg-no-repeat h-52 bg-gray-800 bg-opacity-25 place-content-end text-white"
        style={{ backgroundImage: `url(${imageUrl}  )` }}
      >
        <div className="bg-gradient-to-t from-black to-transparent fill-transparent">
          <div className="flex flex-row text-gray-500 ">
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
    </div>
  );
}

export default FeaturedNews;
