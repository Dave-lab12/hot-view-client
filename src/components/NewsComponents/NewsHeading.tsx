import React from "react";
import * as Label from "@radix-ui/react-label";

interface IProps {
  title: string;
  titleClass?: string;
}

function NewsHeading({ title, titleClass }: IProps) {
  return (
    <>
      <Label.Root className={`font-bold text-xl ${titleClass}`}>
        {title}
      </Label.Root>
    </>
  );
}

export default NewsHeading;
