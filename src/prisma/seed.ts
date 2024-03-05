import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.student.deleteMany({});
  await prisma.group.deleteMany({});
  await prisma.course.deleteMany({});
  await prisma.studentGroup.deleteMany({});

  await prisma.course.createMany({
    data: [
      {
        code: "IT2810",
        name: "Web Development",
        institute: "Department of Computer Science",
        description: "",
      },
      {
        code: "TMM4220",
        name: "Innovation Design Thinking",
        institute: "Department of Mechanical and Industrial Engineering",
        description: "",
      },
      {
        code: "TDT4240",
        name: "Software Architecture",
        institute: "Department of Computer Science",
        description: "",
      },
      {
        code: "TDT4100",
        name: "Object-Oriented Programming",
        institute: "Department of Computer Science",
        description: "",
      },
      {
        code: "TMA4100",
        name: "Calculus",
        institute: "Department of Mathematical Sciences",
        description: "",
      },
      {
        code: "TDT4140",
        name: "Software Engineering",
        institute: "Department of Computer Science",
        description: "",
      },
      {
        code: "TDT4136",
        name: "Introduction to Artificial Intelligence",
        institute: "Department of Computer Science",
        description: "",
      },
      {
        code: "TDT4175",
        name: "Information Systems",
        institute: "Department of Computer Science",
        description: "",
      },
    ],
  });

  await prisma.student.createMany({
    data: [
      {
        email: "anbjorg@stud.ntnu.no",
        firstName: "Andre",
        lastName: "Bjørgum",
      },
      {
        email: "lars@holter.io",
        firstName: "Lars",
        lastName: "Holter",
      },
      {
        email: "vetle.grim@gmail.no",
        firstName: "Vetle",
        lastName: "Hjelmtvedt",
      },
      {
        email: "frede.berdal@gmail.com",
        firstName: "Frede",
        lastName: "Berdal",
      },
      {
        email: "petter.lauvrak@gmail.com",
        firstName: "Petter",
        lastName: "Lauvrak",
      },
      {
        email: "jakob.theisen@gmail.com",
        firstName: "Jakob",
        lastName: "Theisen",
      },
      {
        email: "christian.evensen@gmail.com",
        firstName: "Christian",
        lastName: "Evensen",
      },
    ],
  });

  await prisma.group.createMany({
    data: [
      {
        courseCode: "IT2810",
      },
      {
        courseCode: "TMM4220",
      },
    ],
  });

  await prisma.studentGroup.createMany({
    data: [
      {
        studentId: 0,
        groupId: 0,
      },
      // {
      //   studentId: 1,
      //   groupId: 1,
      // },
      // {
      //   studentId: 2,
      //   groupId: 1,
      // },
      // {
      //   studentId: 3,
      //   groupId: 1,
      // },
      // {
      //   studentId: 4,
      //   groupId: 2,
      // },
      // {
      //   studentId: 5,
      //   groupId: 2,
      // },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
