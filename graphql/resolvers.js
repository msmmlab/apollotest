const User = require("../models/User");

const resolvers = {
    Query: {
        getAllUsers: async () => {
            const users = await User.query();
            if (users) {
                return users;
            } else {
                return "Users not found";
            }
        },
    },
    Mutation: {
        createUser: async (parent, args, context, info) => {
            console.log("args", args);
            const { name, email } = args;

            return await User.query().insert({
                name,
                email,
            });
        },
    },
};

module.exports = resolvers;
