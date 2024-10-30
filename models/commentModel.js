const comments = [];

export default class Comment {
  static async create({ userId, postId, content }) {
    const comment = { id: comments.length + 1, userId, postId, content };
    comments.push(comment);
    return comment;
  }
}
