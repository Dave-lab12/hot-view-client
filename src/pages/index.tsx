import SideNews from "@/components/HomePage/News/SideNews";

import FeaturedNews from "../components/HomePage/News/FeaturedNews";

export default function Home() {
  return (
    //  imageUrl: string;
    // newsDate: string;
    // readingTime: number;
    // title: string;
    // imageWidth?: number;
    // imageHieght?: number;
    // sideNewsClass?: string;
    <>
      <div className="h-screen">
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
