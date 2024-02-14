import { NextRequest } from "next/server";

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$|favicon.ico|login|).*)"],
};

import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get("token")?.value;
  if (cookie === undefined) {
    const url = request.nextUrl.clone()
    url.pathname = '/auth/login'
    return NextResponse.redirect(url);
  }
}
