import { prisma } from "@/prisma/prisma";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const groupdId = searchParams.get("groupId");
  const studentId = searchParams.get("studentId");

  if (!groupdId || !studentId) {
    return new Response("Missing groupId or studentId", { status: 400 });
  }

  const assignmentReviews = await prisma.assignmentReview.findMany({
    where: {
      reviewerId: parseInt(studentId),
    },
    include: {
      assignment: {
        include: {
          group: {},
        },
      },
    },
  });

  return Response.json(assignmentReviews);
}
