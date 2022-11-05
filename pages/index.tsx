import Login from "@/components/Login";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Login</title>
        <link 
          rel="icon" 
          href="/hot-news-logo.png"
          type="image"
        />
      </Head>
      <main className="">
        <Login />
      </main>
    </div>
  );
}
