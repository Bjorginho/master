"use client";

import { useUser } from "@/context/UserContext";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback } from "./ui/avatar";

const Header = () => {
  const [headerText, setHeaderText] = useState("Loading...");
  const { user, courses } = useUser();
  const pathname = usePathname();

  useEffect(() => {
    const currentCourse = courses.find((course) =>
      pathname.startsWith(`/student/${course.courseCode}`)
    );
    if (currentCourse) {
      setHeaderText(currentCourse.courseCode + " - " + currentCourse.name);
    } else {
      setHeaderText("");
    }
  }, [pathname, courses]);

  const getInitials = () => {
    try {
      const username = user.name.split(" ");
      return username[0].charAt(0) + username[1].charAt(0);
    } catch (error) {
      return user.name.charAt(0);
    }
  };

  return (
    <div className="bg-[#474747] dark:bg-transparent">
      <header className=" flex justify-between items-center py-3 container">
        <div />
        <p className="text-white text-lg font-bold tracking-wide">
          {headerText}
        </p>
        <div className="flex gap-3">
          <Link href="#">
            <Avatar>
              <AvatarFallback>{getInitials()}</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
