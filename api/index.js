const express = require("express");
const { ApolloServer } = require("apollo-server-express");
require("dotenv").config();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { mongooseConnect, models } = require("./models");

const typeDefs = require("./schemas");
const resolvers = require("./resolvers");

const app = express();

const getMe = async req => {
  let token = req.headers.authorization;

  if (token) {
    token = token.replace("Bearer ", "");
    try {
      return await jwt.verify(token, process.env.SECRET);
    } catch (error) {
      throw new AuthenticationError(
        "Your session has expired. Please sign in again."
      );
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const me = await getMe(req);

    return {
      me,
      secret: process.env.SECRET,
      models
    };
  }
});

const port = 8000;

server.applyMiddleware({ app, path: "/graphql" });

mongoose.Promise = global.Promise;
mongooseConnect
  .then(() => {
    app.listen({ port }, () => {
      console.log(`Apollo Server running on port ${port}/graphql`);
    });
  })
  .catch(err => {
    console.log(`error connecting to the database ${err}`);
    process.exit();
  });
