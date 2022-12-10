import React from "react";
import Image from "next/image";

import MenuBar from "./MenuBar";
import Footer from "./Footer";
import NewsHeading from "./NewsComponents/NewsHeading";
import NewsContent from "./NewsComponents/NewsContent";

function DetailNews() {
  return (
    <div className="font-Poppins">
      <MenuBar />
      <div className="grid pt-10 grid-flow-row place-content-center space-y-5">
        <Image
          src="https://picsum.photos/seed/adersone/800/400"
          alt="News image"
          width={1000}
          height={600}
        />
        <NewsHeading title="News title" titleClass="text-black" />
        <NewsContent content="News content" className="break-normal" />
      </div>
      <Footer />
    </div>
  );
}

export default DetailNews;
