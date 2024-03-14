import { startOfToday } from "date-fns";
import React, { createContext, useContext } from "react";

export type View = "day" | "month" | "week" | "year";

interface CalendarContextProps {
  view: View;
  setView: React.Dispatch<React.SetStateAction<View>>;
  selectedDay: Date;
  setSelectedDay: React.Dispatch<React.SetStateAction<Date>>;
}

export const CalendarContext = createContext<CalendarContextProps>({
  view: "month",
  setView: () => {},
  selectedDay: startOfToday(),
  setSelectedDay: () => {},
});

export const useCalendar = () => useContext(CalendarContext);
