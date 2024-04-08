import { prisma } from "@/prisma/prisma";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const groupId = searchParams.get("groupId");

  if (!groupId) {
    return Response.json({ error: "groupId is required" }, { status: 400 });
  }

  const contract = await prisma.groupContract.findUnique({
    where: {
      groupId: parseInt(groupId),
    },
  });

  return Response.json(contract, { status: 200 });
}
