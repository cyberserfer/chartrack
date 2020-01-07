import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export default function(props) {
const userId = window.localStorage.getItem("userId")

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
    <>
    {characters.map(character => <p>{character.details.characterName}</p>)}
    </>
)
: (
    <>
    <p> UserId: {userId}. You don't have any characters saved yet! Try adding one:</p>
    <button
        onClick={() => {
          props.history.push('../savageSheet/addNewCharacter')
        }}
      >
        Add new character
      </button>
    </>
    )
}