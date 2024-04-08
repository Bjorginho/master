import { prisma } from "@/prisma/prisma";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const firstName = searchParams.get("firstName");
  const lastName = searchParams.get("lastName");

  if (!firstName || !lastName)
    return Response.json(
      { message: "Missing required parameters" },
      { status: 400 }
    );

  const user = await prisma.student.findFirst({
    where: {
      firstName: firstName,
      lastName: lastName,
    },
    include: {
      classes: {
        include: {
          class: {
            include: {
              course: true,
            },
          },
          group: true,
        },
      },
    },
  });

  return Response.json(user);
}
