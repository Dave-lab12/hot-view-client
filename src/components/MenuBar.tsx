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
              linkClass={`flex mr-3 items-center text-orange-700 ${
                router.asPath === "/" ? "text-orange-900" : ""
              }`}
              text="Hotnews"
              key="logo"
            >
              <div className="flex flex-row items-center space-x-4">
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
            <NavBar.List className="mx-4 text-orange-700  text-lg hover:bg-orange-700 hover:text-white hover:rounded-md transition duration-200 transfrom ease-in">
              <Link
                link="/login"
                text="Login"
                linkClass={`${
                  router.asPath === "/login" ? "text-orange-900" : ""
                }`}
              />
            </NavBar.List>

            <div className="place-self-end items-center">
              <NavBar.List className=" text-orange-700 text-lg mx-4">
                <BsSearch />
              </NavBar.List>
            </div>
          </div>
          <div className="block z-50 md:hidden">
            <DropDownMenu.Root>
              <DropDownMenu.Trigger asChild>
                <button
                  className="rounded-full h-10 w-10 inline-flex transition duration-100 ease-in items-center justify-center text-orange-700 bg-white shadow hover:bg-gray-400 focus:shadow-lg"
                  aria-label="Customise options"
                >
                  <RxHamburgerMenu />
                </button>
              </DropDownMenu.Trigger>

              <DropDownMenu.Portal>
                <DropDownMenu.Content
                  className=" w-screen bg-white px-16 border-b mt-5 p-3 z-50 rounded-sm shadow-sm"
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
                      link="/#contact"
                      linkClass={`${
                        router.asPath === "/signup" ? "text-orange-900" : ""
                      }`}
                      text="Contact"
                    />
                  </DropDownMenu.Item>
                  <DropDownMenu.Item>
                    <Link
                      link="/login"
                      linkClass={`${
                        router.asPath === "/login" ? "text-orange-900" : ""
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
