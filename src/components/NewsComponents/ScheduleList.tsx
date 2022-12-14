import React from "react";
import * as Label from "@radix-ui/react-label";
import { ScheduleType } from "src/types/Schedule";

import Schedule from "../HomePage/Schedule";

interface IProps {
  schedules?: ScheduleType;
  className?: string;
}

function ScheduleList({ schedules, className }: IProps) {
  return (
    <div className={`border rounded-md xl:mt-5 p-2 h-fit ${className}`}>
      <Label.Root className="text-xl text-blue-black font-bold">
        Upcoming streams
      </Label.Root>
      <Schedule
        title="Trade war in 2022"
        date="Jan 02"
        dateTimeStamp="Jan 10, 2022, 11:30 AM"
        customClass="mt-5"
      />
      <Schedule
        title="Trade war in 2022"
        date="Jan 02"
        dateTimeStamp="Jan 10, 2022, 11:30 AM"
      />
      <Schedule
        title="Trade war in 2022"
        date="Jan 02"
        dateTimeStamp="Jan 10, 2022, 11:30 AM"
      />
      <Schedule
        title="Trade war in 2022"
        date="Jan 02"
        dateTimeStamp="Jan 10, 2022, 11:30 AM"
      />
    </div>
  );
}

export default ScheduleList;
