import mongoose from 'mongoose';

const ProfileSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  profileImage: { type: String }, // Store the path to the image or the URL
  payInfo: {
    cardNumber: String,
    expiration: String,
    cvv: String,
  },
}, { timestamps: true });

export default mongoose.model('Profile', ProfileSchema);
