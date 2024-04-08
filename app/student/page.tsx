"use client";

import Course from "@/components/Card/Course";
import { useUser } from "@/context/UserContext";
import { Student, User } from "@prisma/client";
import { useEffect, useState } from "react";

export default function Courses() {
  const { courses } = useUser();
  const [student, setStudent] = useState<Student | null>(null);

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
            <Course
              className="col-span-full lg:col-span-4"
              key={index}
              course={course}
            />
          ))}
        </div>
      </main>
    </>
  );
}
