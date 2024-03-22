"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { reportSchema, ReportSchema } from "./schema";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

type Reason = {
  reason: string;
  followQuestion?: string;
};

const reasons: Reason[] = [
  {
    reason: "Non-collaborative group members",
    followQuestion: "Which students are not collaborating?",
  },
  { reason: "Unfair workload distribution" },
  { reason: "Conflicts" },
  { reason: "Barriers to completing group assignments effectively" },
  { reason: "Other", followQuestion: "Please specify" },
];

const ReportForm = () => {
  const [followQuestion, setFollowQuestion] = useState<string>("");
  const form = useForm<ReportSchema>({
    resolver: zodResolver(reportSchema),
    defaultValues: {
      title: "",
      reason: "",
      description: "",
      anonym: false,
    },
  });

  function onSubmit(values: ReportSchema) {
    console.log(values);
    toast.success("Your message has been sent successfully!");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/*  */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Select reason */}
        <FormField
          control={form.control}
          name="reason"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Reason</FormLabel>
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  const selected = reasons.find((r) => r.reason === value);
                  const followQuestion = selected?.followQuestion;
                  setFollowQuestion(followQuestion || "");
                }}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a reason for reporting" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {reasons.map(({ reason, followQuestion }, index) => (
                    <SelectItem key={index} value={reason}>
                      {reason}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {followQuestion && (
          <FormField
            control={form.control}
            name="followQuestion"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{followQuestion}</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        {/* Description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea rows={6} {...field} />
              </FormControl>
              <FormMessage />
              <FormDescription>
                Please describe the issue in details.
              </FormDescription>
            </FormItem>
          )}
        />
        {/* Anonym */}
        <FormField
          control={form.control}
          name="anonym"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel>I want to remain anonomyus</FormLabel>
            </FormItem>
          )}
        />
        <p className="text-xs">
          Your message will be sent directly to the course administrator for
          their attention and will be kept confidential from other group members
        </p>
        <Button type="submit">Send</Button>
      </form>
    </Form>
  );
};

export default ReportForm;
