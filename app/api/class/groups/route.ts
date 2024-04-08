import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const courseId = searchParams.get("courseId");

  if (!courseId)
    return Response.json(
      { message: "Missing required parameters" },
      { status: 400 }
    );
}
