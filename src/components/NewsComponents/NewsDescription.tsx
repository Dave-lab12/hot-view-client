import React from "react";
import * as Label from "@radix-ui/react-label";

interface IProps {
  description: string;
}

function NewsDescription({ description }: IProps) {
  return (
    <>
      <Label.Root className="text-md text-gray-500">{description}</Label.Root>
    </>
  );
}

export default NewsDescription;
