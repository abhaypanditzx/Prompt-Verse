import { NextResponse } from "next/server";
import { connectDB } from "../../../../../database/db";
import Category from "../../../../../models/Category";

export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const { categoryId } =await params;
    const category = await Category.findById(categoryId);

    console.log(category);

    if (!category) {
      return NextResponse.json(
        { error: "Category not found" },
        { status: 404 },
      );
    }
    await Category.findByIdAndDelete(categoryId);

    return NextResponse.json(
      { message: "Category deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

