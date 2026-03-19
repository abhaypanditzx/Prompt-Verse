import { connectDB } from "../../../../database/db";
import Prompt from "../../../../models/Prompt";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    await connectDB();
    const {slug} = await params;
    const prompt = await Prompt?.findOne({slug:slug}).populate("category","title")
    return NextResponse.json(prompt)
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
