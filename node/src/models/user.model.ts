import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

let userSchema = new mongoose.Schema({
  // id: { type: Number, required: true, unique: true },
  nom: { type: String, required: true },
  cin: { type: Number, required: true },
  email: { type: String, required: true },
});

const User = mongoose.model("user", userSchema, "user");

export default User;
