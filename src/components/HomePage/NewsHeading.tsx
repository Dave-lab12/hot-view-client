import React from "react";

interface IProps {
  title: string;
}

function NewsHeading({ title }: IProps) {
  return (
    <div>
      <h1 className="font-bold text-xl">{title}</h1>
    </div>
  );
}

export default NewsHeading;
