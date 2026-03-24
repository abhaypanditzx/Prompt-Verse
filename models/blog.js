import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: String,
    slug: { type: String },
    description: String,
    coverImage: String,
    category: String,
    blocks: [
      {
        heading: String,
        image: String,
        prompt: String,
      },
    ],
  },
  { timestamps: true },
);

export default mongoose.models.Blog || mongoose.model("Blog", blogSchema);
