import { connectDB } from "../../../database/db";
import cloudinary from "../../../lib/cloudinary";
import Category from "../../../models/Category";
import { NextResponse } from "next/server";
export async function POST(req){
    await connectDB();
    try {
        const formData = await req.formData();
        const title = formData.get("title");
        const image = formData.get("image");
        if(!title || !image){
            return NextResponse.json({error:"Please provide title and image"}, {status:400});
        }
        const bytes  =  await image.arrayBuffer()
        const buffer =  Buffer.from(bytes)
    const base64image = `data:${image.type};base64,${buffer.toString("base64")}`;

        const uploadResult = await cloudinary.uploader.upload(base64image, {
            folder: "prompt-verse/categories",
        });
        const category = await Category.create({title,image:uploadResult.secure_url});
        return NextResponse.json({category}, {status:201});
    } catch (error) {
        return NextResponse.json({error:error.message}, {status:500});
    }
}

export async function GET(req){
    await connectDB();
    try {
        const categories = await Category.find();
        return NextResponse.json({categories}, {status:200});
    } catch (error) {
        return NextResponse.json({error:error.message}, {status:500});
    }
}