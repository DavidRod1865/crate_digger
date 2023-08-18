import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const url = req.nextUrl.clone();
  url.pathname = "/login";

  // token will exist if the user is keep logged in
  const token = await getToken({ req, secret: process.env.REACT_APP_JWT_SECRET });

  const { pathname } = req.nextUrl;

  // it will allow the requests if the request is coming from this /api/auth or the user has a token
  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }

  // redirect the user to login if they don't have token and requesting a protected route
  if (!token && pathname !== url.pathname) {
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: "/",
};