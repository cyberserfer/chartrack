import gql from 'graphql-tag'

export default gql`
  query getCharacter($_id: ID!) {
      character(input: { _id: $_id }) {
        _id
        details {
          playerName
          playerId
          campaign
          characterName
          description
          race
          height
          weight
          hair
          eyes
        }
        startingPoints {
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
          name
          edgeType 
          requirements
          description
          effects 
        }
        hindrances {
          name
          hindranceType 
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