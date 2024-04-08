import { prisma } from "@/prisma/prisma";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const classId = searchParams.get("classId");

  if (!classId) {
    return Response.json({ message: "Bad request" }, { status: 400 });
  }

  const id = parseInt(classId);
  const assignments = await prisma.assignment.findMany({
    where: {
      classId: id,
    },
  });

  return Response.json(assignments);
}
