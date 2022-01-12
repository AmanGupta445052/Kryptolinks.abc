const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 32,
    },
    linkAddress: {
      type: String,
      required: true,
      maxlength: 12,
    },
    walletAddress: {
      type: String,
      maxlength: 42,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    pfpLink: {
      type: String,
    },
    githubLink: {
      type: String,
    },
    twitterLink: {
      type: String,
    },
    transactions: {
      type: Array,
      default: [],
    },
    pageView: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
