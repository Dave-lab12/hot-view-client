import React from "react";

import Logo from "./Logo";

interface IProps {
  address: string;
  email: string;
  phonenumber: string;
}

function Contact({ address, email, phonenumber }: IProps) {
  return (
    <div className="grid place-items-center">
      <Logo src="/hot-news-logo.png" />
      <text>{address}</text>
      <text>{email}</text>
      <text>{phonenumber}</text>
    </div>
  );
}

export default Contact;
