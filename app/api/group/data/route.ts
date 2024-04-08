import { prisma } from "@/prisma/prisma";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const groupId = req.nextUrl.searchParams.get("groupId");
  if (!groupId) {
    return Response.json({ message: "Bad request" }, { status: 400 });
  }

  const id = parseInt(groupId);
  const group = await prisma.group.findUnique({
    where: {
      id: id,
    },
    include: {
      channels: true,
      deliveredAssignments: true,
      students: {
        include: {
          studentClass: {
            include: {
              student: true,
            },
          },
        },
      },
    },
  });

  return Response.json(group);
}
