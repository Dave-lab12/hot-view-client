import * as DropDownMenu from "@radix-ui/react-dropdown-menu";
import React from "react";
import * as NavBar from "@radix-ui/react-navigation-menu";
import * as Label from "@radix-ui/react-label";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdPhone } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { useRouter } from "next/router";

import Logo from "./Logo";
import Link from "./Link";

function MenuBar() {
  const router = useRouter();

  return (
    <>
      <div className="grid grid-flow-row sm:grid-flow-col p-2 sm:p-4 place-content-center sm:place-content-stretch mx-4 mt-3 rounded-md bg-gray-200 items-center">
        <p className="space-x-3 text-orange-800">
          <Label.Root className="text-sm">Follow us:</Label.Root>
          <AiFillFacebook className="inline-flex text-xl" />
          <AiFillTwitterSquare className="inline-flex text-xl" />
          <AiFillInstagram className="inline-flex text-xl" />
          <AiFillYoutube className="inline-flex text-xl" />
        </p>
        <Label.Root className=" bg-gray-50 p-1 px-3 border place-self-start my-2 sm:my-0 sm:place-self-end text-orange-800 ">
          <MdPhone className=" inline-flex text-lg" /> (818) 919-5619
        </Label.Root>
      </div>
      <NavBar.Root className="grid sticky top-0 z-30 bg-white grid-flow-col p-7 mx-4 border-solid border-b items-center ">
        <div className="grid grid-flow-col justify-between items-center">
          <NavBar.List>
            <Link
              link="/"
              linkClass={`flex mr-3 items-center text-orange-700 ${
                router.asPath === "/" ? "text-orange-900" : ""
              }`}
              text="Hotnews"
              key="logo"
            >
              <div className="flex flex-row z-50 items-center space-x-4">
                <Logo src="/hot-news-logo.png" width={60} height={60} />
                <text className="text-2xl hover:scale-105 transition ease-in duration-100">
                  Hot news
                </text>
              </div>
            </Link>
          </NavBar.List>
          <div className="hidden md:flex md:flex-row">
            <NavBar.List className="mx-4 text-orange-700 text-lg hover:bg-orange-700 hover:text-white hover:rounded-md transition duration-200 transfrom ease-in">
              <Link
                link="/signup"
                linkClass={`${
                  router.asPath === "/signup" ? "text-orange-900 " : ""
                }`}
                text="Stories"
              />
            </NavBar.List>
            <NavBar.List className="mx-4 text-orange-700 text-lg hover:bg-orange-700 hover:text-white hover:rounded-md transition duration-200 transfrom ease-in">
              <Link
                link="/signup"
                text="Forum"
                linkClass={`${
                  router.asPath === "/signup" ? "text-orange-900" : ""
                }`}
              />
            </NavBar.List>
            <NavBar.List className="mx-4 text-orange-700  text-lg hover:bg-orange-700 hover:text-white hover:rounded-md transition duration-200 transfrom ease-in">
              <Link
                link="/signup"
                text="Store"
                linkClass={`${
                  router.asPath === "/signup" ? "text-orange-900" : ""
                }`}
              />
            </NavBar.List>
            <NavBar.List className="mx-4 text-orange-700  text-lg hover:bg-orange-700 hover:text-white hover:rounded-md transition duration-200 transfrom ease-in">
              <Link
                link="/#contact"
                text="Contact"
                linkClass={`${
                  router.asPath === "/#contact" ? "text-orange-900" : ""
                }`}
              />
            </NavBar.List>
            <div className="place-self-end items-center">
              <NavBar.List className=" text-orange-700 text-lg mx-4">
                <BsSearch />
              </NavBar.List>
            </div>
          </div>
          <div className="sm:block md:hidden">
            <DropDownMenu.Root>
              <DropDownMenu.Trigger asChild>
                <button
                  className="rounded-full h-10 w-10 inline-flex items-center justify-center text-orange-700 bg-white shadow hover:bg-gray-400 focus:shadow-lg"
                  aria-label="Customise options"
                >
                  <RxHamburgerMenu />
                </button>
              </DropDownMenu.Trigger>

              <DropDownMenu.Portal>
                <DropDownMenu.Content
                  className=" w-screen bg-white z-40 mx-32 p-3 rounded-sm shadow-sm transition ease-in-out duration-300"
                  sideOffset={5}
                >
                  <DropDownMenu.Item>
                    <Link
                      link="/signup"
                      linkClass={`${
                        router.asPath === "/signup" ? "text-orange-900" : ""
                      }`}
                      text="Stories"
                    />
                  </DropDownMenu.Item>
                  <DropDownMenu.Item>
                    <Link
                      link="/signup"
                      linkClass={`${
                        router.asPath === "/signup" ? "text-orange-900" : ""
                      }`}
                      text="Forum"
                    />
                  </DropDownMenu.Item>
                  <DropDownMenu.Item>
                    <Link
                      link="/signup"
                      linkClass={`${
                        router.asPath === "/signup" ? "text-orange-900" : ""
                      }`}
                      text="Store"
                    />
                  </DropDownMenu.Item>
                  <DropDownMenu.Item>
                    <Link
                      link="/signup"
                      linkClass={`${
                        router.asPath === "/signup" ? "text-orange-900" : ""
                      }`}
                      text="Contact"
                    />
                  </DropDownMenu.Item>
                </DropDownMenu.Content>
              </DropDownMenu.Portal>
            </DropDownMenu.Root>
          </div>
        </div>
      </NavBar.Root>
    </>
  );
}

export default MenuBar;
