"use client";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Course, courses } from "@/types/Course";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "../ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  course: z.string(),
});

const NewCourseForm = ({
  setCourses,
}: {
  setCourses: Dispatch<SetStateAction<Course[]>>;
}) => {
  const router = useRouter();
  const [selectedCourse, setSelectedCourse] = useState<
    z.infer<typeof formSchema>["course"] | null
  >(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const course = courses.find((course) => course.code === values.course);

    // Register new course
    if (course) {
      setCourses((prevCourses) => [...prevCourses, course]);
      // Navigate to new course
      router.push(
        `/admin/course/register?code=${course.code}&semester=1&year=2024`
      );
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormDescription>
          <h1>Register course</h1>
        </FormDescription>

        <FormField
          control={form.control}
          name="course"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Course</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a course" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {courses.map((course, index) => (
                    <SelectItem key={index} value={course.code}>
                      {course.code} - {course.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <DialogClose asChild>
          <Button type="submit">Create</Button>
        </DialogClose>
      </form>
    </Form>
  );
};

export default NewCourseForm;
