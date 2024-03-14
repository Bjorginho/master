"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Dispatch, SetStateAction } from "react";
import { Question } from "@/components/CreateForm/CreateForm";
import { X } from "lucide-react";

const schema = z.object({
  question: z.string().min(2).max(500),
  choices: z.array(z.object({ choice: z.string().min(1).max(500) })),
});

type Schema = z.infer<typeof schema>;

const MultipleChoiceQuestionForm = (props: {
  setQuestions: Dispatch<SetStateAction<Question[]>>;
}) => {
  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      question: "",
      choices: [{ choice: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "choices",
  });

  const handleAddChoice = () => {
    append({ choice: "" });
  };

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
        <FormLabel>Choices</FormLabel>
        {fields.map((field, index) => (
          <div key={index}>
            <FormLabel>Option {index + 1}</FormLabel>
            <div className="flex items-center gap-2">
              <FormField
                key={field.id}
                control={form.control}
                name={`choices.${index}.choice`}
                render={({ field }) => (
                  <FormItem className="flex-grow">
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button size={"icon"} onClick={() => remove(index)}>
                <X />
              </Button>
            </div>
          </div>
        ))}
        <Button onClick={handleAddChoice}>Add choice</Button>
        <Button type="submit">Add question</Button>
      </form>
    </Form>
  );
};

export default MultipleChoiceQuestionForm;
