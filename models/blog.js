import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String },
    description: { type: String },
    coverImage: String,
    category: { type: String },

    blocks: [
      {
        heading: { type: String },
        image: String,
        explanation: { type: String, default: "" },
        prompt: { type: String },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Blog || mongoose.model("Blog", blogSchema);