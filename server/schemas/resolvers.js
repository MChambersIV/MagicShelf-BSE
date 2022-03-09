const { bookSchema, User } = require('../models');

const resolvers = {
    Query: {
        me: async () => {
            return User.find({});
        },
    },
    Mutation: {
        login: async (parent, args) => {
            const login = await Login.login(args);
            return login;
        }
    }
}
    

module.exports = resolvers
