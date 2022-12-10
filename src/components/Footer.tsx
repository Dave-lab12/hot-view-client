import React from "react";
import * as Label from "@radix-ui/react-label";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { MdPhone } from "react-icons/md";

import Contact from "./Contact";

interface Iprops {
  className?: string;
}

function Footer({ className = "" }: Iprops) {
  return (
    <>
      <section
        id="contact"
        className={`grid grid-cols-4 font-Poppins xl:px-10 py-10 place-content-center text-gray-600 text-lg bg-gray-400 ${className}`}
      >
        <div className="space-y-5">
          <div className="grid py-10 place-items-center">
            <Contact
              address="F1 456 Caron Town"
              email="info@example.com"
              phonenumber="234-582432343"
              customClass="text-white"
            />
          </div>
        </div>
        <div
          className={`grid col-span-4  grid-flow-row sm:grid-flow-col p-2 sm:p-4 place-content-center sm:place-content-stretch mx-4 mt-3 rounded-md bg-gray-200 items-center`}
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
      </section>
    </>
  );
}

export default Footer;
