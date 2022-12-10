import React from "react";
import Image from "next/image";
import * as Label from "@radix-ui/react-label";

import MenuBar from "./MenuBar";
import Footer from "./Footer";
import NewsHeading from "./NewsComponents/NewsHeading";
import NewsContent from "./NewsComponents/NewsContent";
import UserCreatedNews from "./HomePage/News/UserCreatedNews";
import Schedule from "./HomePage/Schedule";
import ScheduleList from "./NewsComponents/ScheduleList";

function DetailNews() {
  return (
    <div className="font-Poppins">
      <MenuBar />
      <div className="grid pt-10 grid-flow-row place-content-center space-y-5">
        <div className="flex flex-col">
          <Image
            src="https://picsum.photos/seed/adersone/800/400"
            alt="News image"
            width={1000}
            height={600}
          />
          <NewsHeading title="News title" titleClass="text-black" />
          <NewsContent content="News content" className="break-normal" />
        </div>
      </div>
      <div className="flex xl:flex-row flex-col items-start lg:pl-40 lg:pr-20 md:px-16 px-8 mt-10">
        <div className="col-span-2 mt-10 m-10">
          <div className="py-2">
            <Label.Root className="font-bold text-blue-black text-2xl">
              Top stories
            </Label.Root>
          </div>
          <div className="text-gray-500">
            <UserCreatedNews
              profileImg="https://picsum.photos/seed/f/200/140"
              firstName="FirstName"
              lastName="lastName"
              newsImage="https://picsum.photos/seed/g/200/140"
              customClass="mb-16 pb-5"
            />
            <UserCreatedNews
              profileImg="https://picsum.photos/seed/h/200/140"
              firstName="FirstName"
              lastName="lastName"
              newsImage="https://picsum.photos/seed/i/200/140"
              customClass="mb-16 pb-5"
            />
            <UserCreatedNews
              profileImg="https://picsum.photos/seed/j/200/140"
              firstName="FirstName"
              lastName="lastName"
              newsImage="https://picsum.photos/seed/k/200/140"
              customClass="mb-16 pb-5"
            />
            <UserCreatedNews
              profileImg="https://picsum.photos/seed/l/200/140"
              firstName="FirstName"
              lastName="lastName"
              newsImage="https://picsum.photos/seed/m/200/140"
              customClass="mb-16 pb-5"
            />
          </div>
        </div>
        <ScheduleList />
      </div>

      <Footer className="bg-blue-black text-white" />
    </div>
  );
}

export default DetailNews;
