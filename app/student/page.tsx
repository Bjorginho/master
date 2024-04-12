"use client";

import CourseCard from "@/components/Card/CourseCard";
import { Course, Student } from "@prisma/client";
import { useEffect, useState } from "react";

export default function Courses() {
  const [student, setStudent] = useState<Student | null>(null);
  const [courses, setCourses] = useState<Course[]>([]);

  async function fetchUserStudentData() {
    const response = await fetch("/api/user?firstName=Andre&lastName=Bjørgum", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      setStudent(data);
      let coursesData: Course[] = data.classes.map((c: any) => c.class.course);
      setCourses(coursesData);
    }
  }

  useEffect(() => {
    if (!student) {
      fetchUserStudentData();
    }
  }, []);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center gap-6">
        <h1 className="font-bold text-4xl">Your courses</h1>
        <div className="grid grid-cols-12 gap-3 ">
          {courses.map((course, index) => (
            <CourseCard
              className="col-span-full lg:col-span-4"
              key={index}
              course={course}
              student={student}
            />
          ))}
        </div>
      </main>
    </>
  );
}
