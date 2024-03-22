import { z } from "zod";

export const reportSchema = z.object({
  title: z.string().min(1, { message: "Please provide a title" }).max(100),
  reason: z.string().optional(),
  followQuestion: z.string().optional(),
  description: z
    .string()
    .min(1, { message: "Please provide a description" })
    .max(500),
  anonym: z.boolean(),
});

export type ReportSchema = z.infer<typeof reportSchema>;
