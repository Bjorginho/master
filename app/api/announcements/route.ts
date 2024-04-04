import { prisma } from "@/prisma/prisma";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest): Promise<Response> {
  const searchParams = request.nextUrl.searchParams;
  const courseId = searchParams.get("courseId");

  if (!courseId) {
    console.error("Invalid request. Missing courseId");
    return Response.json({ message: "Missing courseId" }, { status: 400 });
  }

  const data = await prisma.announcement.findMany({
    where: {
      class: {
        courseCode: courseId,
      },
    },
  });

  return Response.json(data);
}
