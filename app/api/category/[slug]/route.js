import { NextResponse } from "next/server";
import { connectDB } from "../../../../database/db";
import Category from "../../../../models/Category";
import Prompt from "../../../../models/Prompt";

export async function GET(req, { params }) {
  try {
    const { slug } = await params;
    await connectDB();
    if (!slug) {
      return NextResponse.json({ error: "Slug not found" }, { status: 404 });
    }
    const category = await Category.findOne({ slug });
    if (!category) {
      return NextResponse.json(
        { error: "Category not found" },
        { status: 404 },
      );
    }

    // 2. find prompts
    const prompts = await Prompt.find({
      category: category._id,
    }).populate("category", "title slug");
    return NextResponse.json({ prompts });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
