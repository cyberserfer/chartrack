import React from 'react'
import gql from 'graphql-tag'
import { Link } from '@reach/router'

export default function (props) {
  const userId = window.localStorage.getItem('userId')

  const characters = gql`
query characters($userId: String! ) {
    characters(input: { userId: $userId }) {
        details {
            characterName
        }
    }
}
`

  return characters.length ? (
    characters.map((character, i) => <p key={i}>{character.details.characterName}</p>)
  )
    : (
      <>
        <p> UserId: {userId}. You don't have any characters saved yet! Try adding one:</p>
        <Link to='../savageSheet/addNewCharacter'>
        Add new character
        </Link>
      </>
    )
}
