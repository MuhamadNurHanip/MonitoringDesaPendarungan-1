import { NextResponse } from "next/server";
import withAuth from "./middlewares/withAuth";

export async function mainMiddleware(req) {
  const res = NextResponse.next();
  return res;
}

export default withAuth(mainMiddleware, [
  "/",
  "/accounts",
  "/money",
  "/progress",
  "/report",
  "/task",
  "/task/add",
  "/task/edit/:id",
]);

// export const config = {
//   matcher: [
//     "/",
//     "/accounts",
//     "/money",
//     "/progress",
//     "/report",
//     "/task",
//     "/task/add",
//     "/task/edit/:id",
//   ],
// };
