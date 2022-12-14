import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  birth: Date,
  dni: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: { type: String, require: true, unique: true },
  address: {
    country: String,
    city: String,
    zipcode: String,
    street: String,
  },
  password: {
    type: String,
    required: true,
  },
  reference:[{
    name:String,
    phoneNumber:String,
    dni:String
  }],
  isVerified: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    enum: ['Admin', 'Client'],
    required: true,
  }
});

export default mongoose.model("User", userSchema);
