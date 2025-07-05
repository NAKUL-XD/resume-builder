import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { createResume, deleteResume, getResumeById, getUserResume, updateResume } from '../controllers/resumeController.js';
import { uploadResumeImage } from '../controllers/uploadImages.js';

console.log("✅ Resume routes file loaded"); // ADD THIS LINE

const resumeRouter = express.Router();

resumeRouter.post('/', protect, createResume);
resumeRouter.get('/', protect, getUserResume);
resumeRouter.get('/:id', protect, getResumeById);
resumeRouter.put('/:id', protect, updateResume);
resumeRouter.put('/:id/upload-images', protect, uploadResumeImage);
resumeRouter.delete('/:id', protect, deleteResume);

export default resumeRouter;
