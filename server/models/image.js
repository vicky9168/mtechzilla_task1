import mongoose from "mongoose";

// Create Schema
const ImageSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  name: {
    type: String,
    // required: true
  },
  image: {
    type: String,
    // required: true
  }
});

export default mongoose.model("image",ImageSchema)
