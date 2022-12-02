import React from "react";
import * as NavBar from "@radix-ui/react-navigation-menu";
import * as Label from "@radix-ui/react-label";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { MdPhone } from "react-icons/md";
import { BsSearch } from "react-icons/bs";

function MenuBar() {
  return (
    <>
      {" "}
      <div className="grid grid-flow-col p-4 mx-4 mt-3 rounded-md bg-gray-200 items-center">
        <p className="space-x-3 text-gray-700">
          <Label.Root className="text-sm">Follow us:</Label.Root>
          <AiFillFacebook className="inline-flex text-xl" />
          <AiFillTwitterSquare className="inline-flex text-xl" />
          <AiFillInstagram className="inline-flex text-xl" />
          <AiFillYoutube className="inline-flex text-xl" />
        </p>
        <Label.Root className=" bg-gray-50 p-1 px-3 border place-self-end text-gray-700">
          <MdPhone className="inline-flex text-lg" /> (818) 919-5619
        </Label.Root>
      </div>
      <NavBar.Root className="grid grid-flow-col p-7 mx-4 border-solid border-b items-center ">
        <div className="grid grid-flow-col place-content-start items-center">
          <NavBar.List>
            <NavBar.Link href="/" className="text-2xl text-slate-800 mr-3 ">
              News Reporting
            </NavBar.Link>
          </NavBar.List>
          <NavBar.List className="mx-4 text-gray-700 text-lg">
            <NavBar.Link href="/signup">Stories</NavBar.Link>
          </NavBar.List>
          <NavBar.List className="mx-4 text-gray-700 text-lg">
            <NavBar.Link href="/signup">Forum</NavBar.Link>
          </NavBar.List>
          <NavBar.List className="mx-4 text-gray-700 text-lg">
            <NavBar.Link href="/signup">Store</NavBar.Link>
          </NavBar.List>
          <NavBar.List className="mx-4 text-gray-700 text-lg">
            <NavBar.Link href="/signup">Contact</NavBar.Link>
          </NavBar.List>
        </div>
        <div className="place-self-end items-center">
          <NavBar.List className=" text-gray-700 text-lg mx-4">
            <BsSearch />
          </NavBar.List>
        </div>
      </NavBar.Root>
    </>
  );
}

export default MenuBar;
