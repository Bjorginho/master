"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schema, JoinGroupSchema, days } from "./schema";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const JoinGroupForm = () => {
  const [alone, setAlone] = useState<boolean>(false);
  const form = useForm<JoinGroupSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      days: ["monday", "tuesday"],
    },
  });

  function onSubmit(data: JoinGroupSchema) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-2 space-y-2"
      >
        <h1>Please fill out the form</h1>
        <FormDescription>
          To setup a group that works properly it is important that you fill out
          the form below.
        </FormDescription>
        <FormField
          control={form.control}
          name="existingKnowledge"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Do you have any existing knowledge within this field?
              </FormLabel>
              <Textarea rows={3} {...field} />
              <FormDescription>Leave empty if none</FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="motivation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                On a scale from 1 to 5, how motivated are you?
              </FormLabel>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex gap-3 justify-center"
              >
                {[1, 2, 3, 4, 5].map((value, index) => (
                  <FormItem
                    key={index}
                    className="flex days-center space-x-3 space-y-0 "
                  >
                    <FormControl>
                      <RadioGroupItem value={value.toString()} />
                    </FormControl>
                    <FormLabel>{value}</FormLabel>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="ambition"
          render={({ field }) => (
            <FormItem>
              <FormLabel>How ambitious are you?</FormLabel>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col gap-3"
              >
                {[
                  "Casually engaged",
                  "Moderately commited",
                  "Strongly commited",
                  "Highly ambitious",
                ].map((value, index) => (
                  <FormItem
                    key={index}
                    className="flex days-center space-x-3 space-y-0 "
                  >
                    <FormControl>
                      <RadioGroupItem value={value.toString()} />
                    </FormControl>
                    <FormLabel>{value}</FormLabel>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="workload"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                How many hours (approx.) do you plan to work with the course in
                the week?
              </FormLabel>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col gap-3"
              >
                {["<5", "5-10", "10-15", "15-20", ">20"].map((value, index) => (
                  <FormItem
                    key={index}
                    className="flex days-center space-x-3 space-y-0 "
                  >
                    <FormControl>
                      <RadioGroupItem value={value.toString()} />
                    </FormControl>
                    <FormLabel>{value}</FormLabel>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="days"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel>Select days you prefer to work</FormLabel>
              </div>
              {days.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="days"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Where do you prefer to work?</FormLabel>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col gap-3"
              >
                {["digital", "physical", "both"].map((value, index) => (
                  <FormItem
                    key={index}
                    className="flex days-center space-x-3 space-y-0 "
                  >
                    <FormControl>
                      <RadioGroupItem value={value.toString()} />
                    </FormControl>
                    <FormLabel>{value}</FormLabel>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormItem>
          )}
        />

        <FormLabel>Have you arranged group with someone else?</FormLabel>
        <div className="flex gap-2 items-center">
          <Checkbox checked={alone} onCheckedChange={() => setAlone(true)} />
          <p>Yes</p>
          <Checkbox checked={!alone} onCheckedChange={() => setAlone(false)} />
          <p>No</p>
        </div>
        {alone ? (
          <FormItem>
            <FormLabel>Type in name of student(s)</FormLabel>
            <Input {...form.register("fellowStudents.0")} />
            <FormDescription>
              Separate each student with a comma (,)
            </FormDescription>
          </FormItem>
        ) : null}

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default JoinGroupForm;
