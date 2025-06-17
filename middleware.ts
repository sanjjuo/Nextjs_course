import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const locales = routing.locales;
  const defaultLocale = locales[0] || "en";
  locales.find((loc) => {
    request.nextUrl.pathname.startsWith(`/${loc}`);
  });
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Your custom routes
    "/blog",
    "/profile",
    "/about",
    "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
  ],
};

// request: = "contains info about where the user is trying to go"

// NextResponse.redirect() = "Send user somewhere else"
// new URL("/", request.url) = "Send them to home page (/)"
// request.url = Gets the current website domain like for example 'http://localhost:3000/
//new URL creates new url
// new URL("/", request.url) creates: "https://mywebsite.com/"

// Rewrite /about to /profile (URL stays /about but shows /profile content)
