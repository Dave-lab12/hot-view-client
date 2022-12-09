import * as DropDownMenu from "@radix-ui/react-dropdown-menu";
import React from "react";
import * as NavBar from "@radix-ui/react-navigation-menu";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";
import { useRouter } from "next/router";

import Logo from "./Logo";
import Link from "./Link";

function MenuBar() {
  const router = useRouter();

  return (
    <>
      <NavBar.Root className="grid sticky top-0 z-50 h-fit bg-white grid-flow-col p-7 mx-4 border-solid border-b items-center ">
        <div className="grid grid-flow-col justify-between items-center">
          <NavBar.List>
            <Link
              link="/"
              linkClass={`flex mr-3 items-center text-blue-black ${
                router.asPath === "/" ? "text-blue-black" : ""
              }`}
              text="Hotnews"
              key="logo"
            >
              <div className="flex flex-row items-center space-x-4">
                <text className="text-2xl hover:scale-105 transition ease-in duration-100">
                  Hot news
                </text>
              </div>
            </Link>
          </NavBar.List>
          <div className="hidden md:flex md:flex-row">
            <NavBar.List className="mx-4 p-1 px-2 text-blue-black text-lg hover:bg-blue-800 hover:text-white hover:rounded-md transition duration-200 transfrom ease-in">
              <Link
                link="/signup"
                linkClass={`${
                  router.asPath === "/signup" ? "text-black " : ""
                }`}
                text="Stories"
              />
            </NavBar.List>
            <NavBar.List className="mx-4 p-1 px-2 text-blue-black text-lg hover:bg-blue-800 hover:text-white hover:rounded-md transition duration-200 transfrom ease-in">
              <Link
                link="/signup"
                text="Forum"
                linkClass={`${router.asPath === "/signup" ? "text-black" : ""}`}
              />
            </NavBar.List>
            <NavBar.List className="mx-4 p-1 px-2 text-blue-black  text-lg hover:bg-blue-800 hover:text-white hover:rounded-md transition duration-200 transfrom ease-in">
              <Link
                link="/signup"
                text="Store"
                linkClass={`${router.asPath === "/signup" ? "text-black" : ""}`}
              />
            </NavBar.List>
            <NavBar.List className="mx-4 p-1 px-2 text-blue-black  text-lg hover:bg-blue-800 hover:text-white hover:rounded-md transition duration-200 transfrom ease-in">
              <Link
                link="/#contact"
                text="Contact"
                linkClass={`${
                  router.asPath === "/#contact" ? "text-black" : ""
                }`}
              />
            </NavBar.List>
            <NavBar.List className="mx-4 p-1 px-2 text-blue-black  text-lg hover:bg-blue-800 hover:text-white hover:rounded-md transition duration-200 transfrom ease-in">
              <Link
                link="/login"
                text="Login"
                linkClass={`${router.asPath === "/login" ? "text-black" : ""}`}
              />
            </NavBar.List>

            <div className="place-self-center items-center">
              <NavBar.List className=" text-blue-black text-lg mx-4">
                <BsSearch />
              </NavBar.List>
            </div>
          </div>
          <div className="block z-50 md:hidden">
            <DropDownMenu.Root>
              <DropDownMenu.Trigger asChild>
                <button
                  className="rounded-full h-10 w-10 inline-flex transition duration-100 ease-in items-center justify-center text-blue-black bg-white shadow hover:bg-gray-400 focus:shadow-lg"
                  aria-label="Customise options"
                >
                  <RxHamburgerMenu />
                </button>
              </DropDownMenu.Trigger>

              <DropDownMenu.Portal>
                <DropDownMenu.Content
                  className=" w-screen bg-white text-blue-black px-16 border-b mt-5 p-3 z-50 rounded-sm shadow-sm"
                  sideOffset={5}
                >
                  <DropDownMenu.Item>
                    <Link
                      link="/signup"
                      linkClass={`${
                        router.asPath === "/signup" ? "text-black" : ""
                      }`}
                      text="Stories"
                    />
                  </DropDownMenu.Item>
                  <DropDownMenu.Item>
                    <Link
                      link="/signup"
                      linkClass={`${
                        router.asPath === "/signup" ? "text-black" : ""
                      }`}
                      text="Forum"
                    />
                  </DropDownMenu.Item>
                  <DropDownMenu.Item>
                    <Link
                      link="/signup"
                      linkClass={`${
                        router.asPath === "/signup" ? "text-black" : ""
                      }`}
                      text="Store"
                    />
                  </DropDownMenu.Item>
                  <DropDownMenu.Item>
                    <Link
                      link="/#contact"
                      linkClass={`${
                        router.asPath === "/signup" ? "text-black" : ""
                      }`}
                      text="Contact"
                    />
                  </DropDownMenu.Item>
                  <DropDownMenu.Item>
                    <Link
                      link="/login"
                      linkClass={`${
                        router.asPath === "/login" ? "text-black" : ""
                      }`}
                      text="Login"
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
