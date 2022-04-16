import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    tuit: String,
    likes: Number,
    dislikes: Number,
    liked: Boolean,
    disliked: Boolean,
    postedBy: {
      username: String,
    },
  },
  { collection: "tuits" }
);
export default schema;
