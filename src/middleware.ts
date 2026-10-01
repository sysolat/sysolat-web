import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const DIVISION_SUBDOMAINS: Record<string, string> = {
  studio: "studio",
  imagen: "imagen",
  proteccion: "proteccion",
  juridico: "proteccion", // Support juridico as alias to proteccion
};

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get("host") || "";

  // Extract hostname ignoring port (e.g. "proteccion.sysolat.com" or "proteccion.localhost")
  const hostname = host.split(":")[0].toLowerCase();

  // Detect if incoming request is targeting any division subdomain
  for (const [subdomain, route] of Object.entries(DIVISION_SUBDOMAINS)) {
    const isTargetSubdomain =
      hostname === `${subdomain}.sysolat.com` ||
      hostname === `${subdomain}.localhost` ||
      hostname.startsWith(`${subdomain}.`);

    if (isTargetSubdomain) {
      // If the path already starts with the division route, continue
      if (url.pathname.startsWith(`/${route}`)) {
        return NextResponse.next();
      }

      // Rewrite internal request to the division route
      url.pathname = url.pathname === "/" ? `/${route}` : `/${route}${url.pathname}`;
      return NextResponse.rewrite(url);
    }
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
