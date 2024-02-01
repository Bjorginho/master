"use client";

import { useUser } from "@/context/UserContext";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const [headerText, setHeaderText] = useState("Loading...");
  const { courses } = useUser();
  const pathname = usePathname();

  useEffect(() => {
    const currentCourse = courses.find(
      (course) => `/${course.courseCode}` === pathname
    );
    if (currentCourse) {
      setHeaderText(currentCourse.courseCode + " - " + currentCourse.name);
    } else {
      setHeaderText("Home");
    }
  }, [pathname]);

  return (
    <header className="bg-[#00509e] flex justify-center py-3">
      <p className="text-white text-lg font-bold tracking-wide">{headerText}</p>
    </header>
  );
};

export default Header;
