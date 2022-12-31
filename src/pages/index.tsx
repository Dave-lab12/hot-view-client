import { Layout, QueryResult } from "@/components/Layouts";
import {
  FeaturedNews,
  SideNews,
  TopNewsCard,
  UserCreatedNews,
  Schedule,
} from "@/components/News/";
import { Label } from "@/components/Ui";

import { homepageData } from "../data";

function homepage() {
  const loading = false;
  const error = false;

  return (
    <Layout title="Welcome">
      <QueryResult error={error} loading={loading} data={homepageData}>
        <div className="grid grid-flow-row font-Poppins place-content-center lg:px-40 md:px-16 px-8 mt-10">
          <div className="grid xl:grid-cols-3 sm:grid-cols-2 ">
            <div className="h-64 sm:h-128 col-span-2 mb-5">
              {homepageData?.featuredNewsData?.map((featNews, index) => {
                const {
                  imageUrl,
                  newsCategory,
                  postedDate,
                  postedBy,
                  title,
                  description,
                } = featNews;
                return (
                  <FeaturedNews
                    key={index}
                    imageUrl={imageUrl}
                    newsCategory={newsCategory}
                    postedDate={postedDate}
                    postedBy={postedBy}
                    title={title}
                    description={description}
                  />
                );
              })}
            </div>
            <div className="grid place-self-center md:place-self-start col-span-3 sm:py-4 xl:py-0 sm:grid-cols-2 sm:col-span-2 xl:col-span-1 xl:grid-cols-1 xl:space-y-5 sm:ml-10">
              {homepageData?.sideNewsData?.map((sideNews, index) => {
                const { imageUrl, postedDate, readingTime, title } = sideNews;
                return (
                  <SideNews
                    key={index}
                    imageUrl={imageUrl}
                    postedDate={postedDate}
                    title={title}
                    readingTime={readingTime}
                  />
                );
              })}
            </div>
          </div>
          <div className=" mt-10 xl:mt-20  border-b">
            <Label
              className="font-bold pl-10 text-blue-black text-2xl"
              content="Top stories"
            />
            <div className="grid px-10 sm:px-20 md:p-10 md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-3  sm:place-content-center xl:place-content-stretch">
              {homepageData?.topStoriesData?.map((topNews, index) => {
                const {
                  imageUrl,
                  postedDate,
                  title,
                  isVerified,
                  postedBy,
                  views,
                } = topNews;
                return (
                  <TopNewsCard
                    key={index}
                    imageUrl={imageUrl}
                    postedDate={postedDate}
                    title={title}
                    isVerified={isVerified}
                    postedBy={postedBy}
                    views={views}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex xl:flex-row flex-col">
            <div className="col-span-2 mt-10 mr-10">
              <div className="py-2">
                <Label
                  className="font-bold text-blue-black text-2xl"
                  content="Top stories"
                />
              </div>
              <div className="text-gray-500">
                {homepageData?.userCreatedNews?.map((topNews, index) => {
                  // customClass: "mb-16 pb-5",
                  const { firstName, lastName, newsImage, profileImg } =
                    topNews;
                  return (
                    <UserCreatedNews
                      key={index}
                      profileImg={profileImg}
                      firstName={firstName}
                      lastName={lastName}
                      newsImage={newsImage}
                    />
                  );
                })}
              </div>
            </div>
            <div className="grid xl:grid-flow-row lg:space-x-5 lg:grid-flow-col col-span-1 mt-5 xl:w-2/5">
              <div className="gird space-y-2 place-content-center p-2 border rounded-md h-fit">
                {homepageData?.sideNewsData?.map((sideNews, index) => {
                  const { imageUrl, postedDate, readingTime, title } = sideNews;
                  return (
                    <SideNews
                      key={index}
                      imageUrl={imageUrl}
                      postedDate={postedDate}
                      title={title}
                      readingTime={readingTime}
                    />
                  );
                })}
              </div>
              <div className="border rounded-md xl:mt-5 p-2 h-fit">
                <Label
                  className="text-xl text-blue-black font-bold"
                  content="Upcoming streams"
                />
                {homepageData?.scheduleData?.map((sideNews, index) => {
                  const { date, dateTimeStamp, title } = sideNews;
                  return (
                    <Schedule
                      key={index}
                      title={title}
                      date={date}
                      dateTimeStamp={dateTimeStamp}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className=" font-Poppins my-5 lg:mx-16 mx-7">
          {/* <CallToAction imageUrl="https://picsum.photos/seed/anotherrandom/800/400?grayscale" /> */}
        </div>
      </QueryResult>
    </Layout>
  );
}

export default homepage;
