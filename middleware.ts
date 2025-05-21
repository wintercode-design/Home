// import createMiddleware from "next-intl/middleware";
// import { routing } from "./lib/i18n/routing";

// export default createMiddleware(routing);

// export const config = {
//   // Match all pathnames except for
//   // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
//   // - … the ones containing a dot (e.g. `favicon.ico`)
//   matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
// };

// export {default} from "next-auth/middleware"

// middleware.ts
import { NextRequest } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import nextAuthMiddleware, { NextRequestWithAuth } from "next-auth/middleware";
import { routing } from "./lib/i18n/routing";

// Create intl middleware instance
const intlMiddleware = createIntlMiddleware(routing);

// List of routes that require authentication
const protectedRoutes = ["/dashboard", "/about", "/services", "/settings"];

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log(request.nextUrl.pathname);

  // Check if the request path is one of the protected routes
  const requiresAuth = protectedRoutes.some((path) =>
    pathname.startsWith(path)
  );

  // Run auth middleware only for protected routes
  if (requiresAuth) {
    // Call the middleware function returned by nextAuthMiddleware
    const authResult = await nextAuthMiddleware(request as NextRequestWithAuth);

    if (authResult) return authResult;
  }

  // Run intl middleware for all routes
  return intlMiddleware(request);
}

// Apply middleware to all paths except API/static files
export const config = {
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
