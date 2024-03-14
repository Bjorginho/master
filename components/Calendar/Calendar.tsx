"use client";
import { useState } from "react";
import MonthView from "./_Month";
import { CalendarContext, View } from "@/context/Calendar";
import Events from "./_Events";
import { startOfToday } from "date-fns";

const Calendar = () => {
  const [view, setView] = useState<View>("month");
  const [selectedDay, setSelectedDay] = useState(startOfToday());

  return (
    <CalendarContext.Provider
      value={{ view, setView, selectedDay, setSelectedDay }}
    >
      <div className="grid grid-cols-12 grid-rows-12 gap-2 pb-12">
        <div className="col-span-full lg:col-span-9 row-span-full">
          <MonthView />
        </div>
        <div className="col-span-full lg:col-span-3">
          <Events />
        </div>
      </div>
    </CalendarContext.Provider>
  );
};

export default Calendar;
