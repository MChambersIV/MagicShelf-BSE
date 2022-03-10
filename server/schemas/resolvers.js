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
                throw new  AuthenticationError('Account with this email found.');
            }

            const cPassword = await login.correctPassword(password);

            if (!cPassword) {
                throw new AuthentificationEffor('This password is incorrect.')
            }

            const token = signToken(login);
            return { token, login };
        },
        addUser: async (parent, {username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);

            return { token, user };
        }
    },
};
    

module.exports = resolvers;