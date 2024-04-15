"use client";
import { useEffect, useState } from "react";
import MonthView from "./_Month";
import { CalendarContext, View } from "@/context/Calendar";
import Events from "./_Events";
import { startOfToday } from "date-fns";
import { Event } from "@prisma/client";

const Calendar = () => {
  const [view, setView] = useState<View>("month");
  const [selectedDay, setSelectedDay] = useState(startOfToday());
  const [events, setEvents] = useState<Event[]>([]);

  async function fetchAllEvents() {
    const res = await fetch("/api/events", { method: "GET" });
    const data: Event[] = await res.json();
    setEvents([...events, ...data]);
  }

  useEffect(() => {
    if (events.length === 0) {
      fetchAllEvents();
    }
  }, [events.length, fetchAllEvents]);

  return (
    <CalendarContext.Provider
      value={{
        view,
        setView,
        selectedDay,
        setSelectedDay,
        events,
        setEvents,
        fetchAllEvents,
      }}
    >
      <div className="grid grid-cols-12 grid-rows-12 gap-2 pb-12">
        <div className="col-span-full lg:col-span-9 row-span-full">
          <MonthView />
        </div>
        <div className="col-span-full lg:col-span-3 row-span-6">
          <Events />
        </div>
      </div>
    </CalendarContext.Provider>
  );
};

export default Calendar;
