"use client";

import Course from "@/components/Card/Course";
import Header from "@/components/Header";
import { useUser } from "@/context/UserContext";

export default function Home() {
  const { courses } = useUser();

  return (
    <>
      <Header text={"[PROJECT TITLE HERE]"} />
      <main className="flex min-h-screen flex-col items-center p-24 gap-6">
        <h1 className="font-bold text-4xl">Your courses</h1>
        <div className="flex gap-4">
          {courses.map((course, index) => (
            <Course key={index} course={course} />
          ))}
        </div>
      </main>
    </>
  );
}
