"use client";

import { Fragment, useContext } from "react";
import { Menu, Transition } from "@headlessui/react";
import { CalendarEvent, events } from "./dummyData";
import { format, isSameDay, parseISO } from "date-fns";
import { CalendarContext } from "@/context/Calendar";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Events() {
  const { selectedDay } = useContext(CalendarContext);

  let selectedDayMeetings = events.filter((meeting) =>
    isSameDay(parseISO(meeting.startDatetime), selectedDay)
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
              <Event meeting={meeting} key={index} />
            ))
          ) : (
            <p>No events for today.</p>
          )}
        </ol>
      </div>
    </div>
  );
}

function Event({ meeting }: { meeting: CalendarEvent }) {
  let startDateTime = parseISO(meeting.startDatetime);
  let endDateTime = parseISO(meeting.endDatetime);

  return (
    <li className="group flex items-center space-x-4 rounded-xl px-4 py-2 focus-within:bg-gray-100 hover:bg-gray-100">
      <Image
        src={meeting.imageUrl}
        alt=""
        className="h-10 w-10 flex-none rounded-full"
      />
      <div className="flex-auto">
        <p className="">{meeting.name}</p>
        <div className="flex gap-2">
          <p className="">
            <time dateTime={meeting.startDatetime}>
              {format(startDateTime, "h:mm a")}
            </time>
          </p>
          <p>-</p>
          <p>
            <time dateTime={meeting.endDatetime}>
              {format(endDateTime, "h:mm a")}
            </time>
          </p>
        </div>
      </div>
      <Menu
        as="div"
        className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
      >
        <div>
          <Menu.Button className="-m-2 flex items-center rounded-full p-1.5  hover:text-gray-600">
            <span className="sr-only">Open options</span>
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={cn(
                      active ? "bg-gray-100 " : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Edit
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={cn(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Cancel
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </li>
  );
}
