"use client";

import NewCourseForm from "@/components/Form/NewCourseForm";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Course } from "@/types/Course";
import { ChevronsDown, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const current: Course[] = [
  {
    code: "IT2810",
    title: "Web Development",
    institute: "Department of Computer Science",
  },
  {
    code: "TMM4220",
    title: "Innovation Design Thinking",
    institute: "Departmnt of Mechanical and Industrial Engineering",
  },
  {
    code: "TDT4240",
    title: "Software Architecture",
    institute: "Department of Computer Science",
  },
];

function Admin() {
  const [currentCourses, setCurrentCourses] = useState<Course[]>(current);
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1>Admin Portal</h1>
        <Dialog>
          <DialogTrigger>
            <Button variant={"outline"}>
              <Plus />
              Register new course
            </Button>
          </DialogTrigger>
          <DialogContent>
            <NewCourseForm setCourses={setCurrentCourses} />
          </DialogContent>
        </Dialog>
      </div>
      <div>
        <h2 className="font-semibold">Spring 2024</h2>
        <ul className="flex gap-8 flex-wrap justify-center">
          {currentCourses.map((course, index) => (
            <Card key={index} className="shadow-md">
              <CardHeader>
                <h3 className="font-semibold">{course.code}</h3>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <p className="text-2xl">{course.title}</p>
                <p className="font-light text-sm">{course.institute}</p>
                <p className="font-light">{200} students</p>
              </CardContent>
              <CardFooter className="justify-center">
                <Button asChild>
                  <Link
                    href={`/admin/course?code=${
                      course.code
                    }&semester=${1}&year=${2024}`}
                  >
                    Go to course
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </ul>
      </div>
      <Separator />
      <div>
        <div className="flex flex-col items-center">
          <p>See previous courses</p>
          <Button size={"icon"} variant={"ghost"}>
            <ChevronsDown />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
