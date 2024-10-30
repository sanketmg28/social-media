import express from 'express';
import { toggleLike } from '../controllers/likeController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();
router.get('/toggle/:postId', authMiddleware, toggleLike);

export default router;
