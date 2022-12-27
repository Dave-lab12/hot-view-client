import {
  featuredNewsData,
  sideNewsData,
  topStoriesData,
  upcomingStreams,
} from "../data";
import { Layout, QueryResult } from "../Layouts";

// import HomePage from "@/components/HomePage/HomePage";

function homepage() {
  const loading = true;
  const error = false;
  const data = [
    { sideNewsData },
    { featuredNewsData },
    { topStoriesData },
    { upcomingStreams },
  ];
  return (
    <Layout title="Welcome">
      {/* loading, error, data, */}
      <QueryResult error={error} loading={loading} data={data}>
        <>sad</>
        asd
        {/* <button>asd</button> */}
        {data &&
          data.map((news) => {
            const {
              sideNewsData,
              featuredNewsData,
              topStoriesData,
              upcomingStreams,
            } = news;
          })}
      </QueryResult>
    </Layout>
  );
}

export default homepage;
