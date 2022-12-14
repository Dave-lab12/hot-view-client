import * as Label from "@radix-ui/react-label";

import MenuBar from "../MenuBar";
import CallToAction from "../CallToAction";
import Footer from "../Footer";

import FeaturedNews from "./News/FeaturedNews";
import SideNews from "./News/SideNews";
import TopNewsCard from "./News/TopNewsCard";
import UserCreatedNews from "./News/UserCreatedNews";
import Schedule from "./Schedule";

function HomePage() {
  return (
    <>
      <MenuBar />
      <div className="grid grid-flow-row font-Poppins place-content-center lg:px-40 md:px-16 px-8 mt-10">
        <div className="grid xl:grid-cols-3 sm:grid-cols-2 ">
          <div className="h-64 sm:h-128 col-span-2 mb-5">
            <FeaturedNews
              imageUrl="https://picsum.photos/seed/piawraum/800/400"
              newsCategory="Health"
              postedDate="November 20 2022"
              postedBy="News Direct"
              title="Title for the featured news"
              description="Short description for the featured news"
            />
          </div>
          <div className="grid place-self-center md:place-self-start col-span-3 sm:py-4 xl:py-0 sm:grid-cols-2 sm:col-span-2 xl:col-span-1 xl:grid-cols-1 xl:space-y-5 sm:ml-10">
            <SideNews
              imageUrl="https://picsum.photos/seed/pium/200/140"
              postedDate="Nov 30, 2020"
              readingTime={30}
              title="News title"
            />
            <SideNews
              imageUrl="https://picsum.photos/seed/piaum/200/140"
              postedDate="Nov 30, 2020"
              readingTime={30}
              title="News title"
            />
            <SideNews
              imageUrl="https://picsum.photos/seed/piumam/200/140"
              postedDate="Nov 30, 2020"
              readingTime={30}
              title="News title"
            />
            <SideNews
              imageUrl="https://picsum.photos/seed/piumapum/200/140"
              postedDate="Nov 30, 2020"
              readingTime={30}
              title="News title"
            />
          </div>
        </div>
        <div className=" mt-10 xl:mt-20  border-b">
          <Label.Root className="font-bold pl-10 text-blue-black text-2xl">
            Top stories
          </Label.Root>
          <div className="grid px-10 sm:px-20 md:p-10 md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3  sm:place-content-center xl:place-content-stretch">
            <TopNewsCard
              imageUrl="https://picsum.photos/seed/a/200/140"
              title="Top news Title"
              postedBy="News Direct"
              isVerified={true}
              views="10k"
              postedDate="Nov 20 2022"
              cardClass="md:mr-5  mb-5"
            />
            <TopNewsCard
              imageUrl="https://picsum.photos/seed/e/200/140"
              title="Top news Title"
              postedBy="News Direct"
              isVerified={true}
              views="10k"
              postedDate="Nov 20 2022"
              cardClass="md:mr-5 md:mt-0 sm:mt-4 mb-5"
            />
            <TopNewsCard
              imageUrl="https://picsum.photos/seed/b/200/140"
              title="Top news Title"
              postedBy="News Direct"
              isVerified={true}
              views="10k"
              postedDate="Nov 20 2022"
              cardClass="md:mr-5 md:mt-0 mt-4 mb-5"
            />
            <TopNewsCard
              imageUrl="https://picsum.photos/seed/c/200/140"
              title="Top news Title"
              postedBy="News Direct"
              isVerified={true}
              views="10k"
              postedDate="Nov 20 2022"
              cardClass="md:mr-5 md:mt-0 mt-4 mb-5"
            />
            <TopNewsCard
              imageUrl="https://picsum.photos/seed/d/200/140"
              title="Top news Title"
              postedBy="News Direct"
              isVerified={true}
              views="10k"
              postedDate="Nov 20 2022"
              cardClass="md:mr-5 md:mt-0 mt-4 mb-5"
            />
          </div>
        </div>
        <div className="flex xl:flex-row flex-col">
          <div className="col-span-2 mt-10 mr-10">
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
          <div className="grid xl:grid-flow-row lg:space-x-5 lg:grid-flow-col col-span-1 mt-5 xl:w-2/5">
            <div className="gird space-y-2 place-content-center p-2 border rounded-md h-fit">
              <SideNews
                imageUrl="https://picsum.photos/seed/n/200/140"
                postedDate="Nov 30, 2020"
                readingTime={30}
                title="News title"
                sideNewsClass="my-2"
              />
              <SideNews
                imageUrl="https://picsum.photos/seed/o/200/140"
                postedDate="Nov 30, 2020"
                readingTime={30}
                title="News title"
                sideNewsClass="my-2"
              />
              <SideNews
                imageUrl="https://picsum.photos/seed/p/200/140"
                postedDate="Nov 30, 2020"
                readingTime={30}
                title="News title"
                sideNewsClass="my-2"
              />
              <SideNews
                imageUrl="https://picsum.photos/seed/q/200/140"
                postedDate="Nov 30, 2020"
                readingTime={30}
                title="News title"
                sideNewsClass="my-2"
              />
              <SideNews
                imageUrl="https://picsum.photos/seed/r/200/140"
                postedDate="Nov 30, 2020"
                readingTime={30}
                title="News title"
                sideNewsClass="my-2"
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
          </div>
        </div>
      </div>
      <div className=" font-Poppins my-5 lg:mx-16 mx-7">
        <CallToAction imageUrl="https://picsum.photos/seed/anotherrandom/800/400?grayscale" />
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
