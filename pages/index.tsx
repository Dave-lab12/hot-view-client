import Login from "@/components/Login";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-gray-300 overflow-hidden">
      <Head>
        <title>Login</title>
        <link 
          rel="icon" 
          href="/hot-news-logo.png"
          type="image"
        />
      </Head>
      <main>
        <div className="grid place-items-center h-screen">
          <Login />
        </div>
      </main>
    </div>
  );
}
