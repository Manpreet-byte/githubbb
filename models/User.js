const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true
  },
  age: {
    type: Number,
    min: [18, "Age must be at least 18"],
    max: [60, "Age too large"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true
  }
});

module.exports = mongoose.model("User", userSchema);