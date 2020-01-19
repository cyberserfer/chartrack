import gql from 'graphql-tag'

export default gql`
  query getCharacter($_id: ID!) {
      character(input: { _id: $_id }) {
        _id
        details {
          playerName
          campaign
          characterName
          description
          race
          height
          weight
          hair
          eyes
          experience
        }
        currentPoints {
          attributePoints
          skills
        }
        attributes {
          agility
          smarts
          spirit
          strength
          vigor
        }
        skills {
          baseAttribute
          name
          value
        }
        edges {
          _id
          name
          edgeType 
          requirements
          description
          effects 
        }
        hindrances {
          _id
          name
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