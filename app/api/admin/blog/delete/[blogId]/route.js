import { connectDB } from "../../../../../../database/db";
import Blog from "../../../../../../models/blog";
import { NextResponse } from "next/server";

export async function DELETE(req,{params}){
    const {blogId}= await params;
    await connectDB()
    try {
        const blog = await Blog.findByIdAndDelete(blogId)
        return NextResponse.json({blog,success:true},{status:200})
    } catch (error) {
        return NextResponse.json({error:error.message,success:false},{status:500})
    }
}