"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Feedback } from "@/types/Feedback";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Textarea } from "../ui/textarea";

const questionNumberSchema = z.object({
  question: z.string(),
  answer: z.number().min(1).max(5),
});

const questionTextSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

const formSchema = z.object({
  // questions: z.array(questionTextSchema, questionNumberSchema),
  questionNumbers: z.array(questionNumberSchema),
  questionTexts: z.array(questionTextSchema),
});

const FeedbackForm = (props: { feedback: Feedback }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Feedback form submitted");
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
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex space-y-1 justify-center"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="1" />
                  </FormControl>
                  <FormLabel className="font-normal">One</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="2" />
                  </FormControl>
                  <FormLabel className="font-normal">Two</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="3" />
                  </FormControl>
                  <FormLabel className="font-normal">Three</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="4" />
                  </FormControl>
                  <FormLabel className="font-normal">Four</FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="5" />
                  </FormControl>
                  <FormLabel className="font-normal">Five</FormLabel>
                </FormItem>
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
        onScroll={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-14 "
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
