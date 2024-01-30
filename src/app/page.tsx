"use client";

import Course from "@/components/Card/Course";
import { UserContext } from "@/context/UserContext";
import { useContext } from "react";

export default function Home() {
  const { user, courses } = useContext(UserContext);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="font-bold text-4xl">Your courses</h1>
      <p>Your courses</p>
      <div className="flex gap-4">
        {courses.map((course, index) => (
          <Course key={index} course={course} />
        ))}
      </div>
    </main>
  );
}
