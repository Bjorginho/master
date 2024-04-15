"use client";

import { Fragment, useContext } from "react";
import { Menu, Transition } from "@headlessui/react";
import { format, isSameDay, parseISO } from "date-fns";
import { CalendarContext } from "@/context/Calendar";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Event } from "@prisma/client";

export default function Events() {
  const { selectedDay, events } = useContext(CalendarContext);

  let selectedDayMeetings = events.filter((meeting) =>
    isSameDay(meeting.startDate, selectedDay)
  );

  const formatDate = (date: Date) => {
    return format(date, "yyyy-MM-dd");
  };

  return (
    <div>
      <h2 className="font-semibold ">
        Schedule for{" "}
        <time dateTime={formatDate(selectedDay)}>
          {formatDate(selectedDay)}
        </time>
      </h2>
      <div className="lg:grid lg:grid-cols-12 ">
        <ol className="divide-y divide-gray-100 text-sm leading-6 lg:col-span-full xl:col-span-full">
          {selectedDayMeetings.length > 0 ? (
            selectedDayMeetings.map((meeting, index) => (
              <EventComponent meeting={meeting} key={index} />
            ))
          ) : (
            <p>No events for today.</p>
          )}
        </ol>
      </div>
    </div>
  );
}

function EventComponent({ meeting }: { meeting: Event }) {
  let startDateTime = meeting.startDate;
  let endDateTime = meeting.endDate;

  return (
    <li className="group flex items-center space-x-4 rounded-xl px-4 py-2 focus-within:bg-gray-100 hover:bg-gray-100">
      <div className="flex-auto">
        <p className="font-semibold">{meeting.name}</p>
        <p className="text-sm">{meeting.description}</p>
        <div className="flex gap-2">
          <p className="">
            <time dateTime={meeting.startDate.toString()}>
              {format(startDateTime, "h:mm a")}
            </time>
          </p>
          <p>-</p>
          <p>
            <time dateTime={meeting.endDate?.toString()}>
              {endDateTime && format(endDateTime, "h:mm a")}
            </time>
          </p>
        </div>
      </div>
    </li>
  );
}
