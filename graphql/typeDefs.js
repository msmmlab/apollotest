const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        email: String
    }

    type Query {
        getAllUsers: [User]
    }

    # Mutations
    # input UserInput {
    #     name: String!
    #     email: String
    # }
    type Mutation {
        createUser(name: String!, email: String): User
    }
`;

module.exports = typeDefs;
