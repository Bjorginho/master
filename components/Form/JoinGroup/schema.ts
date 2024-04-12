import { z } from "zod";

export const schema = z.object({
  existingKnowledge: z.string().optional(),
  motivation: z.string(),
  ambition: z.string(),
  workload: z.string(),
  days: z.array(z.string()).refine((value) => value.some((item) => item)),
  location: z.string().min(1),
  fellowStudents: z.array(z.string().min(1)).optional(),
});

export type JoinGroupSchema = z.infer<typeof schema>;

export const days = [
  {
    id: "monday",
    label: "Monday",
  },
  {
    id: "tuesday",
    label: "Tuesday",
  },
  {
    id: "wednesday",
    label: "Wednesday",
  },
  {
    id: "thursday",
    label: "Thursday",
  },
  {
    id: "friday",
    label: "Friday",
  },
  {
    id: "saturday",
    label: "Saturday",
  },
  {
    id: "sunday",
    label: "Sunday",
  },
] as const;
