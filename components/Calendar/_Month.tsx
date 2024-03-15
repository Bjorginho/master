"use client";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfMonth,
  startOfToday,
  startOfWeek,
} from "date-fns";

import { useContext, useState } from "react";
import CalendarHeader from "./_Header";
import { Event, events } from "./dummyData";
import { CalendarContext } from "@/context/Calendar";
import { cn } from "@/lib/utils";

export default function MonthView() {
  let today = startOfToday();
  // let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());
  const { selectedDay, setSelectedDay } = useContext(CalendarContext);

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    let firstDayPreviousMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayPreviousMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function getEventsForDay(day: Date) {
    return events.filter((event) =>
      isSameDay(parseISO(event.startDatetime), day)
    );
  }

  function getEventBackground(event: Event) {
    switch (event) {
      case "assignment":
        return "bg-red-500";
      case "work":
        return "bg-blue-500";
      case "peer review":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  }

  return (
    <>
      <CalendarHeader
        headerText={format(firstDayCurrentMonth, "MMMM yyyy")}
        handleBackButton={previousMonth}
        handleNextButton={nextMonth}
      />
      <div className=" lg:flex lg:h-full lg:flex-col">
        <div className="shadow ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">
          <div className="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-black lg:flex-none">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
              (day, index) => (
                <ColumnHeader text={day} key={index} />
              )
            )}
          </div>
          <div className="flex bg-gray-200 text-xs leading-6 text-black lg:flex-auto">
            <div className="hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-5 lg:gap-px">
              {days.map((day, index) => (
                <div
                  key={day.toString()}
                  onClick={() => setSelectedDay(day)}
                  className={cn(
                    index === 0 && colStartClasses[getDay(day)],
                    isSameMonth(day, today)
                      ? isEqual(day, selectedDay)
                        ? "bg-gray-200"
                        : "bg-white"
                      : "bg-gray-50 text-gray-500",
                    " relative  px-3 py-2 hover:cursor-pointer hover:bg-gray-100"
                  )}
                >
                  <time
                    dateTime={day.toString()}
                    className={
                      isToday(day)
                        ? " flex h-6 w-6 items-center justify-center rounded-full bg-[#9E6DF7B2] font-semibold text-white"
                        : undefined
                    }
                  >
                    {format(day, "d")}
                  </time>
                  {getEventsForDay(day).length > 0 && (
                    <div className="mx-auto flex flex-col gap-1">
                      {getEventsForDay(day).map((event, index) => (
                        <div
                          key={index}
                          className={cn(
                            "flex gap-1 items-center",
                            event.type === "assignment" &&
                              "bg-red-500 text-background rounded-md"
                          )}
                        >
                          <div
                            className={cn(
                              "size-3 rounded-full",
                              getEventBackground(event.type),
                              event.type === "peer review" && "bg-red-400",
                              event.type === "work" && "bg-blue-400"
                            )}
                          />
                          <p>{event.name}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="isolate grid w-full grid-cols-7 grid-rows-5 gap-px lg:hidden">
              {days.map((day, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedDay(day)}
                  type="button"
                  className={cn(
                    isSameMonth(day, today) ? "bg-white" : "bg-gray-50",
                    (isEqual(day, selectedDay) || isToday(day)) &&
                      "font-semibold",
                    isEqual(day, selectedDay) && "text-white",
                    !isEqual(day, selectedDay) &&
                      isToday(day) &&
                      "text-indigo-600",
                    !isEqual(day, selectedDay) &&
                      isSameMonth(day, today) &&
                      !isToday(day) &&
                      "text-gray-900",
                    !isEqual(day, selectedDay) &&
                      !isSameMonth(day, today) &&
                      !isToday(day) &&
                      "text-gray-500",
                    "flex h-14 flex-col px-3 py-2 hover:bg-gray-100 focus:z-10"
                  )}
                >
                  <time
                    dateTime={day.toString()}
                    className={cn(
                      isEqual(day, selectedDay) &&
                        "flex size-6 items-center justify-center rounded-full",
                      isEqual(day, selectedDay) &&
                        isToday(day) &&
                        "bg-indigo-600",
                      isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        "bg-gray-900",
                      "ml-auto"
                    )}
                  >
                    {format(day, "d")}
                  </time>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const ColumnHeader = ({ text }: { text: string }) => {
  return (
    <div className="bg-white py-2">
      {text.charAt(0)}
      <span className="sr-only sm:not-sr-only">{text.slice(1)}</span>
    </div>
  );
};

let colStartClasses = [
  "col-start-7", // Sun
  "col-start-1", // Mon
  "col-start-2", // Tue
  "col-start-3", // Wed
  "col-start-4", // Thu
  "col-start-5", // Fri
  "col-start-6", // Sat
];
