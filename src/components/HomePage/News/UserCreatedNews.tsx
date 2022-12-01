import React from "react";
import * as Avatar from "@radix-ui/react-avatar";

function UserCreatedNews() {
  return (
    <>
      <Avatar.Root className=" inline-flex items-center justify-center overflow-hidden w-5 h-5 rounded-full bg-black ">
        <Avatar.Image
          className="w-full h-full object-cover rounded-full "
          src="/iStockPic.jpg"
          alt="User pic"
        />
        <Avatar.Fallback
          className="w-full h-full flex items-center justify-center bg-white text-orange-600 font-bold "
          delayMs={600}
        >
          UP
        </Avatar.Fallback>
      </Avatar.Root>
    </>
  );
}

export default UserCreatedNews;
