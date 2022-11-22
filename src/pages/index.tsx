import FeaturedNews from "../components/HomePage/News/FeaturedNews";

export default function Home() {
  return (
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
        </div>
      </div>
    </>
  );
}
