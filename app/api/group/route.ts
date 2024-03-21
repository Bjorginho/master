import { GroupData } from "@/hooks/useGroup";
import { NextRequest, NextResponse } from "next/server";

const data: GroupData = {
  id: "75",
  members: [
    {
      firstName: "Andreas",
      lastName: "Berg",
      email: "",
    },
    {
      firstName: "John",
      lastName: "Wick",
      email: "",
    },
    {
      firstName: "Frede",
      lastName: "Berdal",
      email: "",
    },
    {
      firstName: "Petter",
      lastName: "Lauvrak",
      email: "",
    },
    {
      firstName: "Jacob",
      lastName: "Theisen",
      email: "",
    },
  ],
};

export async function GET(request: NextRequest, res: NextResponse) {
  const searchParams = request.nextUrl.searchParams;

  try {
    const courseId = searchParams.get("courseId");
    const userId = searchParams.get("userId");

    const groupId = "UNIQUE_GROUP_ID";
    console.log(courseId, userId, groupId);

    return NextResponse.json(data);
  } catch (error) {}

  return new NextResponse();
}
