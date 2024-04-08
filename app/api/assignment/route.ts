import { prisma } from "@/prisma/prisma";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id");

  if (!id) {
    return Response.json({ message: "Bad request" }, { status: 400 });
  }

  const assignment = await prisma.assignment.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  return Response.json(assignment);
}
