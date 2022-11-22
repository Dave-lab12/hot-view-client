import React from "react";

interface IProps {
  displayInfo: string;
}

function NewsInfo({ displayInfo }: IProps) {
  return (
    <div>
      <h3 className="px-3 text-md hover:text-green-500 transition delay-100 ease-in-out">
        {displayInfo}
      </h3>
    </div>
  );
}

export default NewsInfo;
