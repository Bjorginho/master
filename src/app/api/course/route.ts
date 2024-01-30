import { GroupData } from "@/hooks/useGroup";
import { Course } from "@/types/types";
import { NextRequest, NextResponse } from "next/server";

const data: Course = {
  name: "Eksperter i team: Hvordan oppnå ren luftfart innnen 2050?",
  courseCode: "EIT3010",
  description: "Lars Holter",
};

export async function GET(request: NextRequest, res: NextResponse) {
  const searchParams = request.nextUrl.searchParams;

  try {
    const courseId = searchParams.get("courseId");

    return NextResponse.json(data);
  } catch (error) {}

  return new NextResponse();
}
