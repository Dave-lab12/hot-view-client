import React from "react";
import * as Label from "@radix-ui/react-label";

interface IProps {
  displayInfo: string;
  infoClass?: string;
}

function NewsInfo({ displayInfo, infoClass }: IProps) {
  return (
    <>
      <Label.Root className={`text-sm  ${infoClass}`}>{displayInfo}</Label.Root>
    </>
  );
}

export default NewsInfo;
