import { connectDB } from "../../../../database/db";
import Blog from "../../../../models/blog";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { slug } = await params;
  try {
    await connectDB();
    const blog = await Blog?.findOne({ slug })
    if (!blog) {
      return NextResponse.json({ message: "Blog not found",success:false }, { status: 404 });
    }
    return NextResponse.json({success:true,blog});
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal server error",success:false },
      { status: 500 },
    );
  }
}