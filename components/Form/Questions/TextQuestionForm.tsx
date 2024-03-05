"use client";

import { z } from "zod";
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
import { Dispatch, SetStateAction } from "react";
import { Question } from "@/components/CreateForm/CreateForm";

const schema = z.object({
  question: z.string().min(2).max(500),
});

type Schema = z.infer<typeof schema>;

const TextQuestionForm = (props: {
  setQuestions: Dispatch<SetStateAction<Question[]>>;
}) => {
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      question: "",
    },
  });

  function onSubmit(values: Schema) {
    console.log(values);
    props.setQuestions((prev) => [
      ...prev,
      {
        question: values.question,
      },
    ]);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="question"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Add question</Button>
      </form>
    </Form>
  );
};

export default TextQuestionForm;
