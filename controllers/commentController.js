import Comment from '../models/commentModel.js';

export const createComment = async (req, res, next) => {
  try {
    const { postId, content } = req.body;
    const newComment = await Comment.create({ userId: req.user.id, postId, content });
    res.status(201).json(newComment);
  } catch (error) {
    next(error);
  }
};
