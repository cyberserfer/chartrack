import gql from 'graphql-tag'

export default gql`
mutation addSheet(
    $details: CharacterDetailsInput,
    $attributes: AttributesInput,
    $currentPoints: CurrentPointsInput,
    $skills: [SkillInput],
    $edges: [ID],
    $hindrances: [ID],
    $powers: [ID],
    $items: [ID]
) {
    addSheet(input: {
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
        details {
            characterName
        }
    }
}
`