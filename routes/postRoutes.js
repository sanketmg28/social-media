import express from 'express';
import {createPost, getAllPosts} from '../controllers/postController.js';
import {authMiddleware} from '../middlewares/authMiddleware.js';
import {upload} from '../middlewares/fileUpload.js';

const router = express.Router();
router.post('/', authMiddleware, upload.single('image'), createPost);
router.get('/all', getAllPosts);

export default router;

