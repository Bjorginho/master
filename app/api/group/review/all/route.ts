import { prisma } from "@/prisma/prisma";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const groupId = searchParams.get("id");

  if (!groupId) {
    return new Response("Missing groupId", { status: 400 });
  }

  const groupReviews = await prisma.groupReview.findMany({
    where: {
      reviewer: {
        groupId: parseInt(groupId),
      },
    },
  });

  return Response.json(groupReviews);
}
