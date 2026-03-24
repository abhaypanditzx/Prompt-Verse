import { NextResponse } from "next/server";
import { connectDB } from "../../../../database/db";
import blog from "../../../../models/blog";
export async function GET(){
    try {
        connectDB();
        const blogs =  await blog.find();
        if(!blogs){
            return NextResponse.json({message:"No blogs found"},{status:404})
        }
        return NextResponse.json({blogs},{status:200})
    } catch (error) {
        return NextResponse.json({message:"Internal server error"},{status:500})
    }

}