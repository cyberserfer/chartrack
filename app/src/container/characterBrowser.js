import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { Link } from '@reach/router'

export default function (props) {
  const userId = window.localStorage.getItem('userId')

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

const { data: { characters = []} = {} } = useQuery(GET_MY_CHARACTERS)
  return characters && characters.length ? (
    <>
      <h2> Here's a list of all your characters:</h2>
      { characters.map((character, i) => 
      <Link to={`/savageSheet/${character._id}`} key={i}>{character.details.characterName}</Link>)}
    
      <p>Or create a new one:</p>
      <Link to='../savageSheet/addNewCharacter'>
      Add new character
      </Link>
    </>
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
