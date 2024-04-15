"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Feedback } from "@/types/Feedback";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  questionNumbers: z.array(
    z.object({
      question: z.string(),
      answer: z.string(),
    })
  ),
  questionTexts: z.array(
    z.object({
      question: z.string(),
      answer: z.string(),
    })
  ),
});

type Schema = z.infer<typeof formSchema>;

const FeedbackForm = (props: { feedback: Feedback }) => {
  const form = useForm<Schema>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: Schema) {
    console.log(values);
  }

  const renderTextQuestion = (question: any, index: number) => {
    return (
      <FormField
        key={index}
        name="questionTexts"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-semibold text-md">
              {question.question}
            </FormLabel>
            <FormControl>
              <Textarea className="text-foreground" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
    );
  };

  const renderNumberQuestion = (question: any, index: number) => {
    return (
      <FormField
        key={index}
        name="questionNumbers"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-semibold text-md">
              {question.question}
            </FormLabel>
            <FormControl>
              <RadioGroup
                // onValueChange={field.onChange}
                onValueChange={(value) => {
                  console.log(value);
                  form.setValue("questionNumbers", [
                    // ...field.value,
                    { question: question.question, answer: value },
                  ]);
                }}
                defaultValue={field.value}
                className="flex space-y-1 justify-center"
              >
                {["One", "Two", "Three", "Four", "Five"].map((value, index) => (
                  <FormItem
                    key={index}
                    className="flex items-center space-x-3 space-y-0"
                  >
                    <FormControl>
                      <RadioGroupItem value={value} />
                    </FormControl>
                    <FormLabel className="font-normal">{value}</FormLabel>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormControl>
          </FormItem>
        )}
      />
    );
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-14"
      >
        {props.feedback.questions.map((question, index) => {
          switch (question.answerKind) {
            case "text":
              return renderTextQuestion(question, index);
            case "number":
              return renderNumberQuestion(question, index);
          }
        })}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default FeedbackForm;
