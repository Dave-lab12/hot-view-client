import React from "react";
import * as Label from "@radix-ui/react-label";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { MdPhone } from "react-icons/md";

interface Iprops {
  className?: string;
}

function Footer({ className = "" }: Iprops) {
  return (
    <>
      <div
        className={`grid grid-flow-row sm:grid-flow-col p-2 sm:p-4 place-content-center sm:place-content-stretch mx-4 mt-3 rounded-md bg-gray-200 items-center ${className}`}
      >
        <p className="space-x-3 text-blue-black">
          <Label.Root className="text-sm">Follow us:</Label.Root>
          <AiFillFacebook className="inline-flex text-xl" />
          <AiFillTwitterSquare className="inline-flex text-xl" />
          <AiFillInstagram className="inline-flex text-xl" />
          <AiFillYoutube className="inline-flex text-xl" />
        </p>
        <Label.Root className=" bg-gray-50 p-1 px-3 border place-self-start my-2 sm:my-0 sm:place-self-end text-blue-black ">
          <MdPhone className=" inline-flex text-lg" /> (818) 919-5619
        </Label.Root>
      </div>
    </>
  );
}

export default Footer;
