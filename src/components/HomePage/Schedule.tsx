import React from "react";
import * as Label from "@radix-ui/react-label";
import { BsCalendar4 } from "react-icons/bs";

interface IProps {
  title: string;
  dateTimeStamp: string;
  date: string;
  customClass?: string;
}

function Schedule({ title, date, dateTimeStamp, customClass = " " }: IProps) {
  return (
    <div
      className={`flex flex-row items-center justify-between p-1 ${customClass}`}
    >
      <div className="flex flex-row">
        <div className="grid rounded-md bg-orange-200 text-gray-800 px-3 h-16 place-content-center break-normal mr-3 ">
          {date ? date.split(" ")[0] : "Jan"}
          <br />
          {date ? date.split(" ")[1] : "01"}
        </div>
        <div className="flex flex-col text-sm text-gray-500 items-center">
          <Label.Root className="font-bold text-md">{title}</Label.Root>
          <Label.Root>{dateTimeStamp}</Label.Root>
        </div>
      </div>
      <BsCalendar4 className="flex text-orange-700 ml-16 text-3xl" />
    </div>
  );
}

export default Schedule;
