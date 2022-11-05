import Login from "@/components/Login";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Login</title>
        <link 
          rel="icon" 
          href="/hot-news-logo.png"
          type="image"
        />
      </Head>
      <main>
        <Login />
      </main>
    </div>
  );
}
