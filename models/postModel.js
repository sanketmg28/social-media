const posts = [];

export default class Post {
    static async create({userId, caption, imageUrl}) {
        const post = {id: posts.length + 1, userId, caption, imageUrl};
        posts.push(post);
        return post;
    }
    static async findAll(){
        return posts;
    }
}