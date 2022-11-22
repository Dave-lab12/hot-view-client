import React from "react";

interface IProps {
  displayInfo: string;
  infoClass?: string;
}

function NewsInfo({ displayInfo, infoClass }: IProps) {
  return (
    <div>
      <h3
        className={`text-md hover:text-green-500 transition delay-100 ease-in-out ${infoClass}`}
      >
        {displayInfo}
      </h3>
    </div>
  );
}

export default NewsInfo;
