import SideNews from "@/components/HomePage/News/SideNews";

import FeaturedNews from "../components/HomePage/News/FeaturedNews";
import TopNewsCard from "../components/HomePage/News/TopNewsCard";

export default function Home() {
  return (
    // imageUrl: string;
    // title: string;
    // postedBy: string;
    // isVerified: boolean;
    // views: number;
    // postedDate: string;
    <>
      <div className="h-screen">
        <TopNewsCard
          imageUrl="/iStockPic.jpg"
          title="Hello there"
          postedBy="SomeOne"
          isVerified={false}
          views={100}
          postedDate="2 Days"
        />
        <div className="">
          <FeaturedNews
            imageUrl="/iStockPic.jpg"
            newsCategory="Health"
            postedDate="Nov 11, 2024"
            postedBy="News Direct"
            title="The highest breaking news ever"
            description="This is just a test news discription"
          />
          <SideNews
            imageUrl="/iStockPic.jpg"
            postedDate="Nov 11, 2024"
            readingTime={3}
            title="Health issue that needs immediate attention"
            imageWidth={140}
            imageHeight={140}
          />
        </div>
      </div>
    </>
  );
}
