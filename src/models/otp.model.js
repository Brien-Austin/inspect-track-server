import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: String,
  createdAt: Date,
  expiresAt: Date,
  attempts: {
    type: Number,
    default: 0,
  },
});

const Otp = mongoose.model("Otp", otpSchema);
export default Otp;
