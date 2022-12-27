import React from "react";

interface IProps {
  address: string;
  email: string;
  phonenumber: string;
  customClass?: string;
}

function Contact({ address, email, phonenumber, customClass = "" }: IProps) {
  return (
    <>
      <div className={`grid place-self-center items-start  ${customClass}`}>
        <text>{address}</text>
        <text>{email}</text>
        <text>{phonenumber}</text>
      </div>
    </>
  );
}

export default Contact;
