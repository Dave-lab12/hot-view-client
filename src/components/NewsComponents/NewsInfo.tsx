import React from "react";
import * as Label from "@radix-ui/react-label";

interface IProps {
  displayInfo: string;
  infoClass?: string;
}

function NewsInfo({ displayInfo, infoClass }: IProps) {
  return (
    <>
      <Label.Root
        className={`text-sm text-gray-700 hover:text-green-500 transition delay-100 ease-in-out ${infoClass}`}
      >
        {displayInfo}
      </Label.Root>
    </>
  );
}

export default NewsInfo;
