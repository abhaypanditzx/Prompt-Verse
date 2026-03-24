import { connectDB } from "../../../../database/db";
import Blog from "../../../../models/blog";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { slug } = await params;
  try {
    await connectDB();
    const blog = await Blog?.findOne({ slug })
    console.log("blog we got :",blog);
    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}