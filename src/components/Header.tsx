import Head from "next/head";
import Script from "next/script";
import Link from "next/link";

interface IProps {
  title: string;
}

function Header({ title }: IProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/hot-news-logo.png" type="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Script
        src="https://kit.fontawesome.com/0b68e6e59f.js"
        crossOrigin="anonymous"
      ></Script>
    </>
  );
}

export default Header;
