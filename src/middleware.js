import { NextResponse } from "next/server";

export async function middleware(req) {
  const isLogin = true;

  if (isLogin) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: [
    "/",
    "/accounts",
    "/money",
    "/progress",
    "/report",
    "/task",
    "/task/add",
    "/task/edit/:id",
  ],
};
