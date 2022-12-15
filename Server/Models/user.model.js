const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, default: "User" },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    pic: { type: String },
    user:{type: String, required: true,default: "user"}
  },
  {
    timeStamps: true,
    versionKey: false,
  }
);

const User = mongoose.model("user", userSchema);
module.exports = User;
