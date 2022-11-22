import React from "react";

interface IProps {
  description: string;
}

function NewsDescription({ description }: IProps) {
  return (
    <div>
      <p>{description}</p>
    </div>
  );
}

export default NewsDescription;
