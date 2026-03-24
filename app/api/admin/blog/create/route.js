import { connectDB } from "../../../../../database/db";
import Blog from "../../../../../models/blog";
import cloudinary from "../../../../../lib/cloudinary";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();

    const formData = await req.formData();

    const title = formData.get("title");
    const description = formData.get("description");
    const category = formData.get("category");
    const coverImage = formData.get("coverImage");

    const blocks = JSON.parse(formData.get("blocks"));
    // upload cover
    const bytes = await coverImage.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const coverUpload = await cloudinary.uploader.upload(
      `data:${coverImage.type};base64,${buffer.toString("base64")}`
    );

    const updatedBlocks = [];

    for (let i = 0; i < blocks.length; i++) {

      const block = blocks[i];
      const file = formData.get(`blockImage_${i}`);

      let imageUrl = "";

      if (file) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const upload = await cloudinary.uploader.upload(
          `data:${file.type};base64,${buffer.toString("base64")}`
        );

        imageUrl = upload.secure_url;
      }

      updatedBlocks.push({
        heading: block.heading,
        prompt: block.prompt,
        image: imageUrl
      });
    }

    const slug = title.toLowerCase().replace(/\s+/g,"-");

    console.log("image url ",coverUpload.secure_url)
    const blog = await Blog.create({
      title,
      description,
      category,
      coverImage: coverUpload.secure_url,
      blocks: updatedBlocks,
      slug
    });

    return NextResponse.json({
      success:true,
      blog
    });

  } catch (error) {
    console.log(error);
    return NextResponse.json({success:false});
  }
}