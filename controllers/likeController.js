import Like from '../models/likeModel.js';

export const toggleLike = async (req, res, next) => {
  try {
    const likeStatus = await Like.toggle(req.params.postId, req.user.id);
    res.status(200).json({ message: `Post ${likeStatus ? 'liked' : 'unliked'}` });
  } catch (error) {
    next(error);
  }
};
