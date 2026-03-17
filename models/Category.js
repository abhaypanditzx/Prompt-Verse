import mongoose from "mongoose"

const categorySchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    promptCount:{
        type:Number,
        default:0
    }
},{
    timestamps:true
})

export default mongoose.models.Category || mongoose.model("Category",categorySchema)