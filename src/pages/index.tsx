import FeaturedNews from "../components/HomePage/FeaturedNews";

export default function Home() {
  return (
    <>
      <FeaturedNews
        imageUrl="https://media.istockphoto.com/id/1182477852/photo/breaking-news-world-news-with-map-backgorund.jpg?s=612x612&w=0&k=20&c=SQfmzF39HZJ_AqFGosVGKT9iGOdtS7ddhfj0EUl0Tkc="
        newsCategory="Health"
        postedDate="November 11 2024"
        postedBy="News Direct"
        title="The highest breaking news ever"
        description="This is just a test news discription"
      />
    </>
  );
}
