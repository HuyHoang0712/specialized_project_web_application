import { NextRequest } from "next/server";

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*|login|)',],
};

import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
 
}
