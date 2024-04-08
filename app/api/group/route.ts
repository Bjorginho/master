import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const courseId = searchParams.get("courseId");
  const userId = searchParams.get("groupId");

  if (!courseId || !userId)
    return Response.json(
      { message: "Missing required parameters" },
      { status: 400 }
    );

  return NextResponse.json({ message: "Nothing here" });
}
