import React from "react";

interface IProps {
  description: string;
}

function NewsDescription({ description }: IProps) {
  return (
    <div>
      <p className="text-md text-gray-500">{description}</p>
    </div>
  );
}

export default NewsDescription;
