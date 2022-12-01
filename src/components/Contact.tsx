import React from "react";

import Logo from "./Logo";

interface IProps {
  address: string;
  email: string;
  phonenumber: string;
  customClass?: string;
}

function Contact({ address, email, phonenumber, customClass = "" }: IProps) {
  return (
    <>
      <div className="grid place-content-center mb-2">
        <Logo src="/hot-news-logo.png" />
      </div>
      <div className={`grid place-content-center items-start ${customClass}`}>
        <text>{address}</text>
        <text>{email}</text>
        <text>{phonenumber}</text>
      </div>
    </>
  );
}

export default Contact;
