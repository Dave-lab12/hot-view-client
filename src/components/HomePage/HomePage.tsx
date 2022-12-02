import * as Label from "@radix-ui/react-label";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

import MenuBar from "../MenuBar";
import CallToAction from "../CallToAction";
import Contact from "../Contact";
import Logo from "../Logo";

import FeaturedNews from "./News/FeaturedNews";
import SideNews from "./News/SideNews";
import TopNewsCard from "./News/TopNewsCard";
import UserCreatedNews from "./News/UserCreatedNews";
import Schedule from "./Schedule";

function HomePage() {
  return (
    <>
      <MenuBar />
      <div className="grid grid-flow-row place-content-center md:px-40 mt-10">
        <div className="grid grid-cols-3 ">
          <div className=" h-96 col-span-2 ">
            <FeaturedNews
              imageUrl="https://picsum.photos/seed/picsum/800/400"
              newsCategory="Health"
              postedDate="November 20 2022"
              postedBy="News Direct"
              title="Title for the featured news"
              description="Short description for the featured news"
            />
          </div>
          <div className="grid space-y-2 place-content-center ml-10">
            <SideNews
              imageUrl="/iStockPic.jpg"
              postedDate="Nov 30, 2020"
              readingTime={30}
              title="News title"
            />
            <SideNews
              imageUrl="/iStockPic.jpg"
              postedDate="Nov 30, 2020"
              readingTime={30}
              title="News title"
            />
            <SideNews
              imageUrl="/iStockPic.jpg"
              postedDate="Nov 30, 2020"
              readingTime={30}
              title="News title"
            />
            <SideNews
              imageUrl="/iStockPic.jpg"
              postedDate="Nov 30, 2020"
              readingTime={30}
              title="News title"
            />
          </div>
        </div>
        <div className=" mt-10 pb-8 border-b">
          <Label.Root className="font-bold text-blue-900 text-2xl">
            Top stories
          </Label.Root>
          <div className="grid md:grid-cols-5 sm:auto-cols-fr place-content-stretch mt-5">
            <TopNewsCard
              imageUrl="/iStockPic.jpg"
              title="Top news Title"
              postedBy="News Direct"
              isVerified={true}
              views="10k"
              postedDate="Nov 20 2022"
              cardClass="mr-4"
            />
            <TopNewsCard
              imageUrl="/iStockPic.jpg"
              title="Top news Title"
              postedBy="News Direct"
              isVerified={true}
              views="10k"
              postedDate="Nov 20 2022"
              cardClass="mr-4"
            />
            <TopNewsCard
              imageUrl="/iStockPic.jpg"
              title="Top news Title"
              postedBy="News Direct"
              isVerified={true}
              views="10k"
              postedDate="Nov 20 2022"
              cardClass="mr-4"
            />
            <TopNewsCard
              imageUrl="/iStockPic.jpg"
              title="Top news Title"
              postedBy="News Direct"
              isVerified={true}
              views="10k"
              postedDate="Nov 20 2022"
              cardClass="mr-4"
            />
            <TopNewsCard
              imageUrl="/iStockPic.jpg"
              title="Top news Title"
              postedBy="News Direct"
              isVerified={true}
              views="10k"
              postedDate="Nov 20 2022"
              cardClass="mr-4"
            />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="col-span-2 mt-5 mr-10">
            <UserCreatedNews
              profileImg="/iStockPic.jpg"
              firstName="FirstName"
              lastName="lastName"
              newsImage="/iStockPic.jpg"
              customClass="mb-4"
            />
            <UserCreatedNews
              profileImg="/iStockPic.jpg"
              firstName="FirstName"
              lastName="lastName"
              newsImage="/iStockPic.jpg"
              customClass="mb-4"
            />
            <UserCreatedNews
              profileImg="/iStockPic.jpg"
              firstName="FirstName"
              lastName="lastName"
              newsImage="/iStockPic.jpg"
              customClass="mb-4"
            />
            <UserCreatedNews
              profileImg="/iStockPic.jpg"
              firstName="FirstName"
              lastName="lastName"
              newsImage="/iStockPic.jpg"
              customClass="mb-4"
            />
          </div>
          <div className="grid grid-flow-row col-span-1 mt-5 w-2/5">
            <div className="p-2 border rounded-md h-fit">
              <SideNews
                imageUrl="/iStockPic.jpg"
                postedDate="Nov 30, 2020"
                readingTime={30}
                title="News title"
                sideNewsClass="my-2"
              />
              <SideNews
                imageUrl="/iStockPic.jpg"
                postedDate="Nov 30, 2020"
                readingTime={30}
                title="News title"
                sideNewsClass="my-2"
              />
              <SideNews
                imageUrl="/iStockPic.jpg"
                postedDate="Nov 30, 2020"
                readingTime={30}
                title="News title"
                sideNewsClass="my-2"
              />
              <SideNews
                imageUrl="/iStockPic.jpg"
                postedDate="Nov 30, 2020"
                readingTime={30}
                title="News title"
                sideNewsClass="my-2"
              />
              <SideNews
                imageUrl="/iStockPic.jpg"
                postedDate="Nov 30, 2020"
                readingTime={30}
                title="News title"
                sideNewsClass="my-2"
              />
            </div>
            <div className="border rounded-md mt-5 p-2 h-fit">
              <Label.Root className="text-xl text-blue-900 font-bold">
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
          </div>
        </div>
      </div>
      <div className="my-5 mx-16">
        <CallToAction imageUrl="/iStockPic.jpg" />
      </div>
      <section className="grid grid-cols-4 px-52 py-10 place-content-center text-gray-600 text-lg">
        <div className="space-y-5">
          <div className="grid place-self-start">
            <Logo src="/hot-news-logo.png" width={70} height={70} />
          </div>
          <Contact
            address="F1 456 Caron Town"
            email="info@example.com"
            phonenumber="234-582432343"
            customClass=""
          />
          <div className="space-x-4 text-2xl mt-2">
            <BsFacebook className="inline-block" />
            <BsTwitter className="inline-block " />
            <BsInstagram className="inline-block " />
            <BsLinkedin className="inline-block " />
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
