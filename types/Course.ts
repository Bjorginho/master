import { Course } from "@prisma/client";

interface Employee {
  name: string;
  department: string;
  email: string;
}

export const courses: Course[] = [
  {
    id: 1,
    code: "IT2810",
    name: "Web Development",
    institute: "Department of Computer Science",
    description: "",
    createdAt: new Date(),
  },
  {
    id: 2,
    code: "TMM4220",
    name: "Innovation Design Thinking",
    institute: "Department of Mechanical and Industrial Engineering",
    description: "",
    createdAt: new Date(),
  },
  {
    id: 3,
    code: "TDT4240",
    name: "Software Architecture",
    institute: "Department of Computer Science",
    description: "",
    createdAt: new Date(),
  },
  // {
  //   id: "TDT4100",
  //   name: "Object-Oriented Programming",
  //   institute: "Department of Computer Science",
  //   description: "",
  //   createdAt: new Date(),
  // },
  // {
  //   id: "TMA4100",
  //   name: "Calculus",
  //   institute: "Department of Mathematical Sciences",
  //   description: "",
  //   createdAt: new Date(),
  // },
  // {
  //   id: "TDT4140",
  //   name: "Software Engineering",
  //   institute: "Department of Computer Science",
  //   description: "",
  //   createdAt: new Date(),
  // },
  // {
  //   id: "TDT4136",
  //   name: "Introduction to Artificial Intelligence",
  //   institute: "Department of Computer Science",
  //   description: "",
  //   createdAt: new Date(),
  // },
  // {
  //   id: "TDT4175",
  //   name: "Information Systems",
  //   institute: "Department of Computer Science",
  //   description: "",
  //   createdAt: new Date(),
  // },
  // {
  //   id: "TDT4180",
  //   name: "Human-Computer Interaction",
  //   institute: "Department of Computer Science",
  //   description: "",
  //   createdAt: new Date(),
  // },
  // {
  //   id: "TDT4242",
  //   name: "Agile Software Development",
  //   institute: "Department of Computer Science",
  //   description: "",
  //   createdAt: new Date(),
  // },
  // {
  //   id: "TDT4252",
  //   name: "Advanced Software Design",
  //   institute: "Department of Computer Science",
  //   description: "",
  //   createdAt: new Date(),
  // },
  // {
  //   id: "TDT4300",
  //   name: "Data Warehousing and Data Mining",
  //   institute: "Department of Computer Science",
  //   description: "",
  //   createdAt: new Date(),
  // },
  // {
  //   id: "TDT4305",
  //   name: "Big Data Architecture",
  //   institute: "Department of Computer Science",
  //   description: "",
  //   createdAt: new Date(),
  // },
  // {
  //   id: "TDT4336",
  //   name: "Intelligent Systems",
  //   institute: "Department of Computer Science",
  //   description: "",
  //   createdAt: new Date(),
  // },
  // {
  //   id: "TDT4340",
  //   name: "Design and Evaluation of User Interfaces",
  //   institute: "Department of Computer Science",
  //   description: "",
  //   createdAt: new Date(),
  // },
  // {
  //   id: "TDT4350",
  //   name: "Web Technology",
  //   institute: "Department of Computer Science",
  //   description: "",
  //   createdAt: new Date(),
  // },
  // {
  //   id: "TDT4360",
  //   name: "Cloud Computing",
  //   institute: "Department of Computer Science",
  //   description: "",
  //   createdAt: new Date(),
  // },
  // {
  //   id: "TDT4375",
  //   name: "Semantic Web",
  //   institute: "Department of Computer Science",
  //   description: "",
  //   createdAt: new Date(),
  // },
];
