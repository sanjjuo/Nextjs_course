import { NextRequest, NextResponse } from "next/server";
import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/about")
    return NextResponse.rewrite(new URL("/profile", request.nextUrl));
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
   matcher: [
    // Your custom routes
    "/blog", 
    "/profile", 
    "/about",
    '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
  ]
};

// request: = "contains info about where the user is trying to go"

// NextResponse.redirect() = "Send user somewhere else"
// new URL("/", request.url) = "Send them to home page (/)"
// request.url = Gets the current website domain

// new URL("/", request.url) creates: "https://mywebsite.com/"

// Rewrite /about to /profile (URL stays /about but shows /profile content)
