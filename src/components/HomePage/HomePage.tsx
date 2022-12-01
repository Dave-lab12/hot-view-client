import * as Label from "@radix-ui/react-label";

import MenuBar from "../MenuBar";

import FeaturedNews from "./News/FeaturedNews";
import SideNews from "./News/SideNews";
import TopNewsCard from "./News/TopNewsCard";
import UserCreatedNews from "./News/UserCreatedNews";

function HomePage() {
  return (
    <>
      <MenuBar />
      <div className="grid place-content-center md:px-40 mt-10">
        <div className="grid grid-cols-3 ">
          <div className=" h-96 col-span-2 ">
            <FeaturedNews
              imageUrl="/iStockPic.jpg"
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
        <div className="w-3/5">
          <UserCreatedNews
            profileImg="/iStockPic.jpg"
            firstName="FirstName"
            lastName="lastName"
            newsImage="/iStockPic.jpg"
          />
          <UserCreatedNews
            profileImg="/iStockPic.jpg"
            firstName="FirstName"
            lastName="lastName"
            newsImage="/iStockPic.jpg"
          />
          <UserCreatedNews
            profileImg="/iStockPic.jpg"
            firstName="FirstName"
            lastName="lastName"
            newsImage="/iStockPic.jpg"
          />
          <UserCreatedNews
            profileImg="/iStockPic.jpg"
            firstName="FirstName"
            lastName="lastName"
            newsImage="/iStockPic.jpg"
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;
