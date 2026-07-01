const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  username: {
    type: String,
    unique: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  mobile: {
    type: String
  },

  address: {
    type: String
  },

  dob: {
    type: Date
  },

  aadhaar: {
    type: String
  },

  pan: {
    type: String
  },

  password: {
    type: String,
    required: true
  },

  memberSince: {
    type: Number,
    default: new Date().getFullYear()
  },

  verificationStatus: {
    type: String,
    default: "0/3 Verified"
  },

  chariteanId: {
    type: String
  }

}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
