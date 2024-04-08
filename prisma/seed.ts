// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// async function main() {
//   // Create courses

//   const it2810 = await prisma.course.upsert({
//     where: { code: "IT2810" },
//     update: {},
//     create: {
//       code: "IT2810",
//       name: "Web Development",
//       institute: "Department of Computer Science",
//       description: "",
//     },
//   });

//   const tmm4220 = await prisma.course.upsert({
//     where: { code: "TMM4220" },
//     update: {
//       description: "What has two thumbs and likes to bone your mom? This guy.",
//     },
//     create: {
//       code: "TMM4220",
//       name: "Innovation Design Thinking",
//       institute: "Department of Mechanical and Industrial Engineering",
//       description: "What has two thumbs and likes to bone your mom? This guy.",
//     },
//   });

//   const tdt4240 = await prisma.course.upsert({
//     where: { code: "TDT4240" },
//     update: {},
//     create: {
//       code: "TDT4240",
//       name: "Software Architecture",
//       institute: "Department of Computer Science",
//       description: "",
//     },
//   });

//   const tdt4100 = await prisma.course.upsert({
//     where: { code: "TDT4100" },
//     update: {},
//     create: {
//       code: "TDT4100",
//       name: "Object-Oriented Programming",
//       institute: "Department of Computer Science",
//       description: "",
//     },
//   });

//   const tma4100 = await prisma.course.upsert({
//     where: { code: "TMA4100" },
//     update: {},
//     create: {
//       code: "TMA4100",
//       name: "Calculus",
//       institute: "Department of Mathematical Sciences",
//       description: "",
//     },
//   });

//   const tdt4140 = await prisma.course.upsert({
//     where: { code: "TDT4140" },
//     update: {},
//     create: {
//       code: "TDT4140",
//       name: "Software Engineering",
//       institute: "Department of Computer Science",
//       description: "",
//     },
//   });

//   const tdt4136 = await prisma.course.upsert({
//     where: { code: "TDT4136" },
//     update: {},
//     create: {
//       code: "TDT4136",
//       name: "Introduction to Artificial Intelligence",
//       institute: "Department of Computer Science",
//       description: "",
//     },
//   });

//   const tdt4175 = await prisma.course.upsert({
//     where: { code: "TDT4175" },
//     update: {},
//     create: {
//       code: "TDT4175",
//       name: "Information Systems",
//       institute: "Department of Computer Science",
//       description: "",
//     },
//   });

//   // Create Students

//   const anbjorg = await prisma.student.upsert({
//     where: { email: "anbjorg@stud.ntnu.no" },
//     update: {},
//     create: {
//       email: "anbjorg@stud.ntnu.no",
//       firstName: "Andre",
//       lastName: "Bjørgum",
//     },
//   });

//   const lars = await prisma.student.upsert({
//     where: { email: "lars@holter.io" },
//     update: {},
//     create: {
//       email: "lars@holter.io",
//       firstName: "Lars",
//       lastName: "Holter",
//     },
//   });

//   const vetle = await prisma.student.upsert({
//     where: { email: "vetle.grim@gmail.no" },
//     update: {},
//     create: {
//       email: "vetle.grim@gmail.no",
//       firstName: "Vetle",
//       lastName: "Hjelmtvedt",
//     },
//   });

//   const frede = await prisma.student.upsert({
//     where: { email: "frede.berdal@gmail.com" },
//     update: {},
//     create: {
//       email: "frede.berdal@gmail.com",
//       firstName: "Frede",
//       lastName: "Berdal",
//     },
//   });

//   const petter = await prisma.student.upsert({
//     where: { email: "petter.lauvrak@gmail.com" },
//     update: {},
//     create: {
//       email: "petter.lauvrak@gmail.com",
//       firstName: "Petter",
//       lastName: "Lauvrak",
//     },
//   });

//   const jakob = await prisma.student.upsert({
//     where: { email: "jakob.theisen@gmail.com" },
//     update: {},
//     create: {
//       email: "jakob.theisen@gmail.com",
//       firstName: "Jakob",
//       lastName: "Theisen",
//     },
//   });

//   const class1 = await prisma.class.upsert({
//     where: { id: 1 },
//     update: {},
//     create: {
//       year: 2024,
//       semester: "SPRING",
//       courseCode: "IT2810",
//     },
//   });

//   const class2 = await prisma.class.upsert({
//     where: { id: 2 },
//     update: {},
//     create: {
//       year: 2024,
//       semester: "SPRING",
//       courseCode: "TMM4220",
//     },
//   });

//   const class3 = await prisma.class.upsert({
//     where: { id: 3 },
//     update: {},
//     create: {
//       year: 2024,
//       semester: "SPRING",
//       courseCode: "TMA4100",
//     },
//   });

//   // Create Groups

//   const group1 = await prisma.group.upsert({
//     where: { id: 1 },
//     update: {},
//     create: {
//       classId: 1,
//     },
//   });

//   const group2 = await prisma.group.upsert({
//     where: { id: 2 },
//     update: {},
//     create: {
//       classId: 1,
//       students: {
//         connect: [{ studentId_classId: { classId: 1, studentId: 1 } }],
//       },
//     },
//   });

//   // Create Student Class relation

//   const student1Class1 = await prisma.studentClass.upsert({
//     where: { studentId_classId: { classId: 1, studentId: 1 } },
//     update: {},
//     create: {
//       studentId: 1,
//       classId: 1,
//     },
//   });

//   const student1Class2 = await prisma.studentClass.upsert({
//     where: { studentId_classId: { classId: 1, studentId: 2 } },
//     update: {},
//     create: {
//       studentId: 2,
//       classId: 1,
//     },
//   });

//   const student1Class3 = await prisma.studentClass.upsert({
//     where: { studentId_classId: { classId: 1, studentId: 3 } },
//     update: {},
//     create: {
//       studentId: 3,
//       classId: 1,
//     },
//   });

//   const groupWithStudents = await prisma.group.findUnique({
//     where: { id: 1 },
//     include: {
//       students: {
//         include: {
//           student: true,
//         },
//       },
//     },
//   });

//   groupWithStudents?.students.forEach((group) => {
//     console.log(group.student.firstName, group.student.lastName);
//   });

//   console.log(groupWithStudents);
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
