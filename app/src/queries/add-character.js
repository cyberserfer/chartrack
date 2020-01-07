import gql from 'graphql-tag'
// import Sheet from '../../../api/schemas/SheetSchema'

export default gql`
  mutation addCharacter($sheet: Object) {
      details {
          characterName
          _id
      }
}
`