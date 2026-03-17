import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req) {

  const token = req.cookies.get("token")?.value;

  if (!token) {
    console.log("token not found");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    await jwtVerify(token, secret);

    return NextResponse.next();

  } catch (error) {

    return NextResponse.redirect(new URL("/login", req.url));

  }

}
export const config = {
  matcher: ["/admin/dashboard/:path*", "/admin/prompt/:path*", "/admin/category/:path*"],
};