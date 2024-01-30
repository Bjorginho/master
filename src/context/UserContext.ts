import { Course, User } from "@/app/types/types";
import React, { createContext, useContext } from "react";

interface Props {
  user: User;
  courses: Course[];
}

export const UserContext = createContext<Props>({
  user: { name: "", email: "" },
  courses: [],
});

export const useUser = () => useContext(UserContext);
