import Post from '../models/postModel.js';

export const createPost = async (req, res, next) => {
    try {
        const { caption } = req.body;
        const imageUrl = req.file?.path || null;
        const newPost = await Post.create({ userId: req.user.id, caption, imageUrl });
        res.status(201).json(newPost);
    } catch (error) {
        next(error);
    }
};

export const getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.findAll();
        res.status(200).json(posts);
    }catch(error) {
        next(error);
    }
};