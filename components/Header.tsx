import Head from "next/head";
import Script from "next/script";

interface IProps {
  title: string;
}

function Header({ title }: IProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/hot-news-logo.png" type="image" />
      </Head>
      <Script
        src="https://kit.fontawesome.com/0b68e6e59f.js"
        crossOrigin="anonymous"
      ></Script>
    </>
  );
}

export default Header;
