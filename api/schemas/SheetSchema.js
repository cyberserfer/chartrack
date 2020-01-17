const { gql } = require("apollo-server-express");

module.exports = gql`
  extend type Query {
    character(input: SheetInput): Sheet!
    characters(input: SheetInput): [Sheet!]
  }

  extend type Mutation {
    addSheet(input: SheetInput): Sheet!
    updateSheet(input: SheetInput): Sheet!
    deleteSheet(input: SheetInput): Int!
  }
  type Attributes {
      agility: Int,
      smarts: Int,
      spirit: Int,
      strength: Int,
      vigor: Int
    }

  type CharacterDetails {
      playerName: String,
      playerId: String,
      campaign: String,
      characterName: String,
      description: String,
      race: String,
      height: String,
      weight: String,
      hair: String,
      eyes: String
      experience: Int
    }
  input CharacterDetailsInput {
      playerName: String,
      campaign: String,
      characterName: String!,
      description: String,
      race: String,
      height: String,
      weight: String,
      hair: String,
      eyes: String
    }

  input AttributesInput {
      agility: Int,
      smarts: Int,
      spirit: Int,
      strength: Int,
      vigor: Int
    }
    
  type Skill {
    baseAttribute: String
    name: String
    value: Int
  }

  input SkillInput {
    baseAttribute: String
    name: String
    value: Int
  }

  type CurrentPoints {
    attributePoints: Int
    skills: Int
  }

  input CurrentPointsInput {
    attributePoints: Int
    skills: Int
  }

  type Sheet {
    _id: ID!
    userId: ID
    details: CharacterDetails
    currentPoints: CurrentPoints
    attributes: Attributes
    skills: [Skill]
    edges: [Edge]
    hindrances: [Hindrance]
    items: [Item]
    powers: [Power]
  }

  input SheetInput {
    _id: ID
    userId: ID
    details: CharacterDetailsInput
    currentPoints: CurrentPointsInput
    attributes: AttributesInput
    skills: [SkillInput]
    edges: [ID]
    hindrances: [ID]
    items: [ID]
    powers: [ID]
  }
`;
