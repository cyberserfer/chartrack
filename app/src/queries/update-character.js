import gql from 'graphql-tag'

export default gql`
mutation updateSheet(
  $_id: ID
  $details: CharacterDetailsInput,
  $attributes: AttributesInput,
  $currentPoints: CurrentPointsInput,
  $skills: [SkillInput],
  $edges: [ID],
  $hindrances: [ID],
  $powers: [ID],
  $items: [ID]
) {
  updateSheet(input: {
    _id: $_id
    details: $details
    attributes: $attributes
    currentPoints: $currentPoints
    skills: $skills         
    edges: $edges
    hindrances: $hindrances
    powers: $powers
    items: $items
  }) {
      _id
      userId
      details {
          characterName
      }
  }
}
`