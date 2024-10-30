const likes = [];

export default class Like {
  static async toggle(postId, userId) {
    const likeIndex = likes.findIndex(like => like.postId === postId && like.userId === userId);

    if (likeIndex !== -1) {
      likes.splice(likeIndex, 1);
      return false;
    } else {
      likes.push({ id: likes.length + 1, postId, userId });
      return true;
    }
  }
}
