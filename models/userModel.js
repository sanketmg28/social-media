export const users = [];
export default class User {
    static async create({ name, email, password }) {
        const user = { id: users.length + 1, name, email, password };
        users.push(user);
        return user;
    }

    static async findByEmailAndPassword(email, password) {
        const user = users.find(user => user.email === email);
        if (user && user.password === password) {
            return user;
        }
        return null; // Return null if credentials are invalid
    }
}
