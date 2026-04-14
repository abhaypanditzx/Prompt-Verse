import { NextResponse } from "next/server";
import Prompt from "../../../models/Prompt";
export async function POST(req) {
  const { query } = await req.json();
  const prompts = await Prompt.find({
    title: { $regex: query, $options: "i" },
  }).populate("category")
  if (prompts.length === 0) {
    return NextResponse.json({ message: "No prompts found" });
  }

  return NextResponse.json({ prompts });
}
