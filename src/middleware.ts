import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get("host") || "";

  // Extract hostname ignoring port (e.g. "studio.sysolat.com" or "studio.localhost")
  const hostname = host.split(":")[0].toLowerCase();

  // Detect if incoming request is targeting the studio subdomain
  const isStudioSubdomain =
    hostname === "studio.sysolat.com" ||
    hostname === "studio.localhost" ||
    hostname.startsWith("studio.");

  if (isStudioSubdomain) {
    // If the path already starts with /studio, continue
    if (url.pathname.startsWith("/studio")) {
      return NextResponse.next();
    }

    // Rewrite internal request to /studio route
    url.pathname = url.pathname === "/" ? "/studio" : `/studio${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - api routes (/api/*)
     * - _next/static (static assets)
     * - _next/image (image optimization)
     * - favicon.ico, icon.png, apple-icon.png
     * - static assets in public/ (logos, slides, images, icons)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|logos|slides|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|mp4|webm)).*)",
  ],
};
