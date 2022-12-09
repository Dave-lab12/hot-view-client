import React from "react";
import * as Label from "@radix-ui/react-label";
import Link from "next/link";

import Button from "./Form/Button";

interface IProps {
  imageUrl: string;
}

function CallToAction({ imageUrl }: IProps) {
  return (
    <div
      style={{ backgroundImage: `url( ${imageUrl})` }}
      className="grid place-content-center h-80 bg-no-repeat bg-cover"
    >
      <div className="">
        <Label.Root className="font-bold text-2xl sm:text-3xl md:text-4xl text-white">
          SignUp to get latest stories
        </Label.Root>
        <div className="grid grid-flow-row place-content-center mt-8">
          <Link
            href={"/signup"}
            className={` grid bg-blue-black mb-3 w-24 place-items-center text-white transition duration-150 hover:bg-blue-800 h-9 rounded-lg `}
          >
            Signup
          </Link>
          <Link
            href={"/login"}
            className={` grid bg-blue-black w-24 place-items-center text-white transition duration-150 hover:bg-blue-800 h-9 rounded-lg `}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
