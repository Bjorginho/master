import { prisma } from "@/prisma/prisma";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const events = await prisma.event.findMany({});
  console.log(events);
  return Response.json(events);
}
