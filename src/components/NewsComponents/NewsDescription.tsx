import React from "react";
import * as Label from "@radix-ui/react-label";

interface IProps {
  description: string;
  descClass?: string;
}

function NewsDescription({ description, descClass }: IProps) {
  return (
    <>
      <Label.Root className={`text-md text-sm ${descClass}`}>
        {description}
      </Label.Root>
    </>
  );
}

export default NewsDescription;
