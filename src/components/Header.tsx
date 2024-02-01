"use client";

import { useUser } from "@/context/UserContext";
import { RefreshCcw } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ModeToggleButton } from "./Button/ModeToggle";
import Link from "next/link";
import { Avatar, AvatarFallback } from "./ui/avatar";

const Header = () => {
  const [headerText, setHeaderText] = useState("Loading...");
  const { user, courses } = useUser();
  const pathname = usePathname();

  useEffect(() => {
    const currentCourse = courses.find((course) =>
      pathname.startsWith(`/${course.courseCode}`)
    );
    console.log(currentCourse);
    if (currentCourse) {
      setHeaderText(currentCourse.courseCode + " - " + currentCourse.name);
    } else {
      setHeaderText("Home");
    }
  }, [pathname]);

  const getInitials = () => {
    try {
      const username = user.name.split(" ");
      return username[0].charAt(0) + username[1].charAt(0);
    } catch (error) {
      return user.name.charAt(0);
    }
  };

  return (
    <header className="bg-[#00509e] flex justify-between items-center py-3 container">
      <div></div>
      <p className="text-white text-lg font-bold tracking-wide">{headerText}</p>
      <div className="flex gap-3">
        <ModeToggleButton />
        <Link href="#">
          <Avatar>
            <AvatarFallback>{getInitials()}</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </header>
  );
};

export default Header;
