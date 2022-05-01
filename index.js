const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const dbSetup = require("./db/db-setup");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

async function startServer() {
    dbSetup();
    const app = express();

    app.use(express.json());

    const apolloServer = new ApolloServer({ typeDefs, resolvers });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });

    // Default route
    app.get("/", (req, res) => {
        res.status(200).send("Server ok");
    });

    app.listen(8888, () => {
        console.log("Server running on PORT:8888");
    });
}

startServer();
