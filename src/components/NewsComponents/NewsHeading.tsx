import React from "react";

interface IProps {
  title: string;
  titleClass?: string;
}

function NewsHeading({ title, titleClass }: IProps) {
  return (
    <div>
      <h1 className={`font-bold text-xl ${titleClass}`}>{title}</h1>
    </div>
  );
}

export default NewsHeading;
