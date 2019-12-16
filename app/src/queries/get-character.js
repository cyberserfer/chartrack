import gql from 'graphql-tag'

export default gql`
  query getCharacter($_id: ID!) {
      character(input: { _id: $_id }) {
        _id
        userId
        details {
          name
          value
          effects
        }
        startingPoints {
          attributePoints
          skills
        }
        attributes {
          name
          value
        }
        skills {
          baseAttribute
          name
          value
        }
        edges {
          name
          type 
          requirements
          description
          effects 
        }
        hindrances {
          name
          type 
          requirements
          description
          effects 
          severity
        }

        items {
          _id
          armor
          ap
          cost
          cover
          damage
          effects
          minimumStrength
          name
          notes
          parry
          range
          rof
          shots
          weight
        }
        powers {
          _id
          duration
          modifiers
          name
          powerPoints
          range
          rank
          trappings
        }
      }
    }
`