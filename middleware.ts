import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // const currentUser = request.cookies.get("currentUser")?.value;
  // console.log(request);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
