"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback } from "./ui/avatar";

const Header = () => {
  const [headerText, setHeaderText] = useState("");
  const params = useParams<{ course: string }>();

  useEffect(() => {
    setHeaderText(params.course || "");
  }, [params]);

  const getInitials = () => {
    try {
      const username = "Andre Bjørgum".split(" ");
      return username[0].charAt(0) + username[1].charAt(0);
    } catch (error) {
      return "Andre Bjørgum".charAt(0);
    }
  };

  return (
    <div className="bg-[#474747] dark:bg-transparent">
      <header className=" flex justify-between items-center py-3 container ">
        <div className="flex-1">
          <p className="text-white text-lg">SPRING 2024</p>
        </div>
        <div className="flex-grow text-center">
          <p className="text-white text-lg font-bold">{headerText}</p>
        </div>
        <div className="flex flex-1 gap-3 justify-end">
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
