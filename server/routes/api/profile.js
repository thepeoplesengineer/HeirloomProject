import express from 'express';
import multer from 'multer';
import path from 'path';
import Profile from '../../models/Profile.js';
import authenticateToken from '../../middleware/authMiddleware.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post('/profile', authenticateToken, upload.single('profileImage'), async (req, res) => {
  const { fullName, email, phone, cardNumber, expiration, cvv } = req.body;
  const profileImage = req.file ? req.file.path : null;

  try {
    const profile = new Profile({
      fullName,
      email,
      phone,
      profileImage,
      payInfo: { cardNumber, expiration, cvv },
    });
    await profile.save();
    res.status(200).json({ message: 'Profile saved successfully', profile });
  } catch (error) {
    res.status(500).json({ message: 'Error saving profile', error });
  }
});

export default router;
