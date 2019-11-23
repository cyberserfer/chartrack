const { gql } = require('apollo-server-express');

module.exports = gql`
	extend type Query {
        character(name: String!): Character!
        characters(userId: String!): [Character!]
    }
    extend type Mutation {
        createCharacter(name: String!): Character!
        deleteCharacter(name: String!): Character!
    }
    type Character {
        name: String
    }
`;
