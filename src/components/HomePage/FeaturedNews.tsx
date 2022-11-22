import React from "react";

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
        className="bg-cover bg-no-repeat "
        style={`background-image: url('${{ imageUrl }}')`}
      >
        <div className=" bg-gray-800 bg-opacity-25 ">
          <div className="flex flex-row place-content-start">
            <h3>{newsCategory}</h3>
            <h3>{postedBy}</h3>
            <h3>{postedDate}</h3>
          </div>
          <div>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedNews;
