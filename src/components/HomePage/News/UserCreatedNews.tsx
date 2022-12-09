import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import * as Label from "@radix-ui/react-label";
import NewsHeading from "@/components/NewsComponents/NewsHeading";
import NewsDescription from "@/components/NewsComponents/NewsDescription";
import NewsInfo from "@/components/NewsComponents/NewsInfo";
import Image from "next/image";
import { BsBookmark, BsThreeDots } from "react-icons/bs";

interface IProps {
  profileImg: string;
  fallBackUName?: string;
  firstName: string;
  lastName: string;
  newsImage: string;
  customClass?: string;
}
function UserCreatedNews({
  profileImg,
  firstName,
  lastName,
  newsImage,
  fallBackUName = firstName[0] + lastName[0],
  customClass = " ",
}: IProps) {
  return (
    <div
      className={`grid sm:grid-cols-2 md:grid-cols-3 place-items-start border-b pb-2 ${customClass}`}
    >
      <div className="col-span-2  justify-center">
        <div className="flex flex-row items-center">
          <Avatar.Root className=" inline-flex items-center justify-center overflow-hidden w-10 h-10 rounded-full bg-black ">
            <Avatar.Image
              className="w-full h-full object-cover rounded-full "
              src={profileImg}
              alt="User pic"
            />
            <Avatar.Fallback
              className="w-full h-full flex items-center justify-center bg-white text-orange-600 font-bold "
              delayMs={600}
            >
              {fallBackUName}
            </Avatar.Fallback>
          </Avatar.Root>
          <Label.Root className="pl-2 text-sm font-bold text-orange-800">
            {`${firstName} ${lastName}`}
          </Label.Root>
        </div>
        <div className="flex flex-col space-y-2 mt-2">
          <NewsHeading
            title="User created news title"
            titleClass="text-orange-800"
          />
          <NewsDescription
            descClass="sm:break-normal sm:pr-20"
            description="User created news description in short which is very highly toxic that is used to do some stuff that are really great"
          />
          <div className="flex flex-row items-start md:space-x-16">
            <div className="flex flex-col grow sm:flex-row">
              <NewsInfo infoClass="" displayInfo="Nov 20 2022" />
              <NewsInfo infoClass="grow" displayInfo="10 min read" />
            </div>
            <div className="text-sm md:space-x-5 md:pr-4 text-orange-700">
              <BsBookmark className="inline-block text-xl" />
              <BsThreeDots className="inline-block text-xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 sm:col-span-1 place-self-auto md:place-self-end">
        <Image
          src={newsImage}
          className="mt-5 md:mt-0"
          alt="News image"
          width={200}
          height={250}
        />
      </div>
    </div>
  );
}

export default UserCreatedNews;
