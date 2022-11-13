const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: [true, "Please enter your name"],
      maxLength: [30, "Name cannot exceed 30 characters"],
      minLength: [4, "Name should have more than 4 characters"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      validate: [validator.isEmail, "Please enter a valid Email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your Password"],
      minLength: [8, "Password should be greater than 8 characters"],
      select: false,
    },
    propic: {
      type: Object,
      url: {
        type: URL,
        // require: [true, "Please enter your url"]
      },
      public_id: {
        type: String,
        // require: [true, "Please enter your public id"]
      },
    },
    mobile: {
      type: Number,
      required: [true, "Please enter your mobile number"],
      maxLength: [10, "Mobile no. connot exceed 10 numbers"],
      unique: true,
    },
    balance: {
      type: Number,
      default: 0,
    },

    notilenth: {
      type: Number,
      default: 0,
    },
    notifi: {
      type: Array,
    },
    referCode:{
      type:String,
  },

    role: {
      type: String,
      default: "user",
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

// JWT TOKEN
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// Compare Password

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Generating Password Reset Token
userSchema.methods.getResetPasswordToken = function () {
  // Generating Token
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hashing and adding resetPasswordToken to userSchema
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

  return resetToken;
};

module.exports = mongoose.model("User", userSchema);
