import { connectDB } from "../../../database/db";
import Prompt from "../../../models/Prompt";
import cloudinary from "../../../lib/cloudinary";
import Category from "../../../models/Category";
import { NextResponse } from "next/server";

export async function GET(req) {
  await connectDB();

  const prompts = await Prompt.find()
    .populate("category", "title")
    .sort({ createdAt: -1 });

  return NextResponse.json({ prompts});
}

// create prompt
export async function POST(req) {
  try {
    await connectDB();
    const formData = await req.formData();
    const prompt = formData.get("prompt");
    const image = formData.get("image");
    const title = formData.get("title");
    const category = formData.get("category");

    if (!prompt || !image || !title || !category) {
      return NextResponse.json(
        { error: "all fields are required",success:false},
        { status: 400 },
      );
    }

    const categoryExist = await Category.findById(category);
    if (!categoryExist) {
      return NextResponse.json(
        { error: "Category not found" },
        { status: 404 },
      );
    }

    if (!image.type.startsWith("image/")) {
      return NextResponse.json(
        { error: "Only image files allowed" },
        { status: 400 },
      );
    }
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64image = `data:${image.type};base64,${buffer.toString("base64")}`;
    const uploadresult = await cloudinary.uploader.upload(base64image, {
      folder: "prompt-verse",
    });
// Robust slug generator
function makeSlug(title) {
  // Remove emoji and most punctuation while preserving Unicode letters/numbers
  // Uses Unicode property escapes; requires Node 10+ / modern browsers
  const cleaned = title
    // remove emoji and symbols (keeps letters, numbers, spaces, and hyphens)
    .replace(/\p{Emoji_Presentation}|\p{Extended_Pictographic}|\p{So}/gu, '')
    // replace any character that is not a letter, number, space or hyphen with empty
    .replace(/[^\p{L}\p{N}\s-]+/gu, '')
    // normalize whitespace to single spaces
    .replace(/\s+/g, ' ')
    .trim();

  // Turn spaces into hyphens, collapse multiple hyphens, trim hyphens, lowercase
  const slug = cleaned
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();

  return slug;
}
const promptSlug =await  makeSlug(title)
    // careate prompt 
    const newPrompt = await Prompt.create({
      prompt,
      image: uploadresult.secure_url,
      title,
      category,
      slug:promptSlug
    });

    // increment prompt count 
    await Category.findByIdAndUpdate(category,{$inc:{promptCount:1}})
    await newPrompt.save();
    return NextResponse.json({
      message: "Prompt created successfully",
      newPrompt,
      success:true
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Something went wrong" ,success:false,error:error.message},
      { status: 500 },
    );
  }
}
