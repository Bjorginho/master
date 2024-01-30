"use client";
import { UserContext } from "../context/UserContext";
import { Course, User } from "../types/types";

const defaultUser: User = {
  name: "John Doe",
  email: "john.doe@gmail.com",
};

const defaultCourses: Course[] = [
  {
    name: "Eksperter i team - Hvordan oppnå en ren luftfart innen 2050?",
    courseCode: "TET4854",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, dicta?",
  },
  {
    name: "Webutvikling",
    courseCode: "IT2810",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, dicta?",
  },
  {
    name: "Master i informatikk, forberedende prosjekt",
    courseCode: "IT3915",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, dicta?",
  },
];

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserContext.Provider
      value={{ user: defaultUser, courses: defaultCourses }}
    >
      {children}
    </UserContext.Provider>
  );
};
