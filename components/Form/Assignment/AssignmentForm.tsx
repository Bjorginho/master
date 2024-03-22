"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dispatch, useState } from "react";
import { toast } from "sonner";

import { z } from "zod";

export const schema = z.object({
  submission: z
    .string({ required_error: "Please provide a file" })
    .min(1, { message: "Please provide a file" }),
  description: z.string().optional(),
});

export type Schema = z.infer<typeof schema>;

const AssignmentForm = ({ fnAction }: { fnAction: Dispatch }) => {
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  function onSubmit(values: Schema) {
    console.log(values);
    toast.success("You have successfully submitted the assignment!");
    console.log(values.submission);
    fnAction(true);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="submission"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Upload submission</FormLabel>
              <FormControl>
                <Input type="file" accept=".pdf" className="w-fit" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional description</FormLabel>
              <FormControl>
                <Textarea rows={5} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormDescription>
          Only one person in the group needs to submit the assignment.
        </FormDescription>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default AssignmentForm;
