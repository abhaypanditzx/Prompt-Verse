import { NextResponse } from "next/server";
import {connectDB} from "../../../../database/db";
import Prompt from "../../../../models/Prompt";

export async function DELETE(req, {params}) {
  try {
    await connectDB();
    const {promptId} =await params;
    const prompt = await Prompt.findById(promptId);
    if (!prompt) {
      return NextResponse.json({ message: "Prompt not found" ,success:false}, { status: 404 });
    }
    await Prompt.findByIdAndDelete(promptId);
    return NextResponse.json({ message: "Prompt deleted successfully" ,success:true});
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Something went wrong" ,success:false}, { status: 500 });
  }
}