import { GroupData } from "@/hooks/useGroup";
import { NextRequest, NextResponse } from "next/server";

const data: GroupData = {
  id: "75",
  courseId: "TETRIS101",
  members: [
    { firstName: "Andreas", lastName: "Berg" },
    { firstName: "John", lastName: "Wick" },
    { firstName: "Frede", lastName: "Berdal" },
    { firstName: "Petter", lastName: "Lauvrak" },
    { firstName: "Jacob", lastName: "Theisen" },
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
