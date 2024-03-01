export type Course = {
  code: string;
  title: string;
  institute: string;
};

interface Employee {
  name: string;
  department: string;
  email: string;
}

// Mock data

const trond: Employee = {
  name: "Trond Aalberg",
  department: "Department of Computer Science",
  email: "trond.aalberg@ntnu.no",
};

const terje: Employee = {
  name: "Terje Gjøsæter",
  department: "Department of Computer Science",
  email: "terje.gjoseter@ntnu.no",
};

export const courses: Course[] = [
  {
    code: "IT2810",
    title: "Web Development",
    institute: "Department of Computer Science",
  },
  {
    code: "TMM4220",
    title: "Innovation Design Thinking",
    institute: "Department of Mechanical and Industrial Engineering",
  },
  {
    code: "TDT4240",
    title: "Software Architecture",
    institute: "Department of Computer Science",
  },
  {
    code: "TDT4100",
    title: "Object-Oriented Programming",
    institute: "Department of Computer Science",
  },
  {
    code: "TMA4100",
    title: "Calculus",
    institute: "Department of Mathematical Sciences",
  },
  {
    code: "TDT4140",
    title: "Software Engineering",
    institute: "Department of Computer Science",
  },
  {
    code: "TDT4136",
    title: "Introduction to Artificial Intelligence",
    institute: "Department of Computer Science",
  },
  {
    code: "TDT4175",
    title: "Information Systems",
    institute: "Department of Computer Science",
  },
  {
    code: "TDT4180",
    title: "Human-Computer Interaction",
    institute: "Department of Computer Science",
  },
  {
    code: "TDT4242",
    title: "Agile Software Development",
    institute: "Department of Computer Science",
  },
  {
    code: "TDT4252",
    title: "Advanced Software Design",
    institute: "Department of Computer Science",
  },
  {
    code: "TDT4300",
    title: "Data Warehousing and Data Mining",
    institute: "Department of Computer Science",
  },
  {
    code: "TDT4305",
    title: "Big Data Architecture",
    institute: "Department of Computer Science",
  },
  {
    code: "TDT4336",
    title: "Intelligent Systems",
    institute: "Department of Computer Science",
  },
  {
    code: "TDT4340",
    title: "Design and Evaluation of User Interfaces",
    institute: "Department of Computer Science",
  },
  {
    code: "TDT4350",
    title: "Web Technology",
    institute: "Department of Computer Science",
  },
  {
    code: "TDT4360",
    title: "Cloud Computing",
    institute: "Department of Computer Science",
  },
  {
    code: "TDT4375",
    title: "Semantic Web",
    institute: "Department of Computer Science",
  },
];
