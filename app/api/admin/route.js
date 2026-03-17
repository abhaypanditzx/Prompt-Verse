import jsonwebtoken from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export async function POST(req) {
  const {email,password} = await req.json();
 console.log("email: ",email)
 console.log("password: ",password)
  if (
    email !== process.env.ADMIN_EMAIL ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }
  const token =  jsonwebtoken.sign({email}, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

const cookiesStore =  await cookies();
  cookiesStore.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  return Response.json({
    message: "Admin logged in successfully",
  })
}


