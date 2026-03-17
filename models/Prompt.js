import mongoose from "mongoose"
const promptSchema =  new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  prompt:{
    type:String,
    required:true
  },
  image:{
    type:String,
    required:true
  },
  category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Category",
    required:true
  }
},{
  timestamps:true
})


export default mongoose.models.Prompt || mongoose.model("Prompt",promptSchema)