"use client";
import { usePageHeader } from "@/context/PageHeaderContext";
import { default as CalendarView } from "@/components/Calendar/Calendar";

const Calendar = () => {
  const { setHeaderText } = usePageHeader();
  setHeaderText("Upcoming events");

  return (
    <div>
      <section className="mb-12">
        <CalendarView />
      </section>
    </div>
  );
};

export default Calendar;
