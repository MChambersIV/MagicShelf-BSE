const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async () => {
          return User.find({});
        },
    },
    Mutation: {
        login: async (parent, { email, password}) => {
            const login = await User.findOne({email});
            
            if (!login) {
                throw new AuthentificationEffor('Account with this email found.');
            }

            const password = await login.correctPassword(password);

            if (!password) {
                throw new AuthentificationEffor('This password is incorrect.')
            }

            const token = signToken(login);
            return { token, login };
        },
        addUser: async (parent, {username, email, password})
    },
};
    

module.exports = resolvers;