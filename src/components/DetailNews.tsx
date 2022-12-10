import React from "react";
import Image from "next/image";
import { Label } from "@radix-ui/react-label";

import MenuBar from "./MenuBar";
import Footer from "./Footer";
import NewsHeading from "./NewsComponents/NewsHeading";
import NewsContent from "./NewsComponents/NewsContent";
import UserCreatedNews from "./HomePage/News/UserCreatedNews";
import Schedule from "./HomePage/Schedule";

function DetailNews() {
  return (
    <div className="font-Poppins">
      <MenuBar />
      <div className="grid pt-10 grid-flow-row place-content-center space-y-5">
        <Image
          src="https://picsum.photos/seed/adersone/800/400"
          alt="News image"
          width={1000}
          height={600}
        />
        <NewsHeading title="News title" titleClass="text-black" />
        <NewsContent content="News content" className="break-normal" />
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
      <div className="border rounded-md xl:mt-5 p-2 h-fit">
        <Label.Root className="text-xl text-blue-black font-bold">
          Upcoming streams
        </Label.Root>
        <Schedule
          title="Trade war in 2022"
          date="Jan 02"
          dateTimeStamp="Jan 10, 2022, 11:30 AM"
          customClass="mt-5"
        />
        <Schedule
          title="Trade war in 2022"
          date="Jan 02"
          dateTimeStamp="Jan 10, 2022, 11:30 AM"
        />
        <Schedule
          title="Trade war in 2022"
          date="Jan 02"
          dateTimeStamp="Jan 10, 2022, 11:30 AM"
        />
        <Schedule
          title="Trade war in 2022"
          date="Jan 02"
          dateTimeStamp="Jan 10, 2022, 11:30 AM"
        />
      </div>
      <Footer />
    </div>
  );
}

export default DetailNews;
