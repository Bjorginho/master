export interface CalendarEvent {
  name: string;
  imageUrl: string;
  startDatetime: string;
  endDatetime: string;
  type: Event;
}

export type Event = "assignment" | "work" | "peer review";

export const events: CalendarEvent[] = [
  {
    name: "Assignment 5",
    imageUrl: "",
    startDatetime: "2024-03-07T13:00",
    endDatetime: "2024-03-07T14:30",
    type: "assignment",
  },
  {
    name: "Work with A5",
    imageUrl: "",
    startDatetime: "2024-03-05T10:00",
    endDatetime: "2024-03-05T14:30",
    type: "work",
  },
];
