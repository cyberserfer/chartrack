import React from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { Link } from '@reach/router'

const GET_MY_CHARACTERS = gql`
    query characters {
      characters(input: { userId: 1 }) {
          _id
          details {
              characterName
          }
      }
    }
`

const DELETE_CHARACTER = gql`mutation delete($ids: [ID]) { delete(input: $ids ) }`

export default function () {
const { data: { characters = []} = {} } = useQuery(GET_MY_CHARACTERS)
const [deleteCharacter ] = useMutation(DELETE_CHARACTER)
  return characters && characters.length ? (
    <div>
      <h2> Here's a list of all your characters:</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap'}}>
        { characters.map((character, i) => (
          <div key={i}>
            <Link style={{ margin: '.5em'}} to={`/savageSheet/${character._id}`} >{character.details.characterName}</Link>
            <button onClick={() => (deleteCharacter({
              variables: { ids: [character._id] } })
              // TODO: Refresh page when a character has been deleted
              // Also probably an alert or "Are you sure? modal"
            )}>
              Delete
            </button>
          </div>
        ))}
      </div>
      <div>
        <p>Or create a new one:</p>
          <Link to='../savageSheet/addNewCharacter'>
            Add new character
          </Link>
      </div>
    </div>
  )
    : (
      <>
        <p>You don't have any characters saved yet! Try adding one:</p>
        <Link to='../savageSheet/addNewCharacter'>
          Add new character
        </Link>
      </>
    )
}
