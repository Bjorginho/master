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
    if (currentCourse) {
      setHeaderText(currentCourse.courseCode + " - " + currentCourse.name);
    } else {
      setHeaderText("");
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
    <header className="bg-[#474747] dark:bg-transparent flex justify-between items-center py-3 container">
      <h1 className="font-bold text-[#f8fafc]">[Title here]</h1>
      <p className="text-white text-lg font-bold tracking-wide">{headerText}</p>
      <div className="flex gap-3">
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
