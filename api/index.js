const express = require('express');
const { ApolloServer } = require('apollo-server-express');
require('dotenv').config();
const mongoose = require('mongoose');
const { mongooseConnect } = require('./models');

const typeDefs = require('./schemas');
const resolvers = require('./resolvers');

const app = express();

const server = new ApolloServer({
	typeDefs,
	resolvers
});

const port = 8000;

server.applyMiddleware({ app, path: '/graphql' });

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
