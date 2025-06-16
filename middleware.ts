import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  // You can access the detected locale like this:
  const locale = routing.locales.find((loc) =>
    request.nextUrl.pathname.startsWith(`/${loc}`)
  );

  // Example: Custom logic (logging the locale)
  if (locale) {
    console.log("Detected locale:", locale);
  }

  // If the path is "/[locale]/about", rewrite to "/[locale]/profile"
  if (locale && request.nextUrl.pathname === `/${locale}/about`) {
    return NextResponse.rewrite(new URL(`/${locale}/profile`, request.url));
  }

  // Call the next-intl middleware to handle locale routing
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
// request.url = Gets the current website domain

// new URL("/", request.url) creates: "https://mywebsite.com/"

// Rewrite /about to /profile (URL stays /about but shows /profile content)
