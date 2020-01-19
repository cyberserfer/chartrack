import gql from 'graphql-tag'

export default gql`
mutation delete(ids: [ID]) {
  delete(input: $ids) {
      ids
      }
  }
}
`
