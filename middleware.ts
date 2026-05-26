import { type NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const isProtected = request.nextUrl.pathname.startsWith("/crm");

  if (!isProtected) {
    return NextResponse.next();
  }

  const hasSupabaseSession = request.cookies.getAll().some((cookie) => cookie.name.startsWith("sb-") && cookie.name.includes("auth-token"));

  if (!hasSupabaseSession) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/login";
    redirectUrl.searchParams.set("redirectedFrom", request.nextUrl.pathname);
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/crm/:path*", "/login", "/signup", "/forgot-password", "/reset-password"],
};
