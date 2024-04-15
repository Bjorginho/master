import { prisma } from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const courseCode = searchParams.get("courseId");
  const studentIdStr = searchParams.get("studentId");

  console.table({ courseId: courseCode, studentIdStr });

  if (!courseCode || !studentIdStr)
    return Response.json(
      { message: "Missing required parameters" },
      { status: 400 }
    );

  const studentId = parseInt(studentIdStr);

  const groups = await prisma.group.findMany({
    where: {
      AND: [
        { class: { courseCode: courseCode } },
        {
          students: {
            some: {
              studentClass: {
                studentId: studentId,
              },
            },
          },
        },
      ],
    },
    include: {
      class: {
        include: {
          course: true,
        },
      },
    },
  });

  return NextResponse.json(groups);
}
