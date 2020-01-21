import React, { useState } from 'react'
import styled from 'styled-components'
import { useQuery, useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { Link } from '@reach/router'

const GET_MY_CHARACTERS = gql`
    query characters {
      characters(input: { userId: 1 }) {
          _id
          details {
              characterName
              campaign
          }
      }
    }
`

const DELETE_CHARACTER = gql`mutation delete($ids: [ID]) { delete(input: $ids ) }`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const CharacterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const StyledLink = styled(Link)`
  box-sizing: border-box;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  height: 100%;
  h3, p {
    margin: 8px;
    padding: 0 16px;
  }
`
const Avatar = styled.div`
    background-image: url(${props => props.src});
    background-size: cover;
    background-position: top;
    width: 100%;
    height: 200px;
`
const Character = styled.div`
  box-sizing: border-box;
  border: 1px solid grey;
  margin: 8px;
  display: flex;
  align-items: center;
  button {
    box-sizing: border-box;
    padding: 16px;
    border: none;
    background-color: ${props => props.theme.colors.danger};
    color: white;
    height: 100%;
    &:hover {
    background-color: ${props => props.theme.colors.dangerHover};
    cursor: pointer;
    }
  }
`

export default function () {
  const { data: { characters = [] } = {} } = useQuery(GET_MY_CHARACTERS)
  const [edit, setEdit] = useState(false)
  const [deleteCharacter] = useMutation(DELETE_CHARACTER)
  return (
    <Wrapper>
      <h2> Here's a list of all your characters:</h2>
      <CharacterWrapper>
        <Character key='default-new'>
          <StyledLink to='../savageSheet/addNewCharacter'>
            <Avatar src="https://i.pinimg.com/originals/94/a7/cc/94a7cc0c8dbd722f50305cec38fccfda.jpg" />
            <h3>New Character</h3>
            <p>New Campaign</p>
          </StyledLink>
        </Character>
        {characters.map((character, i) => (
          <Character key={i}>
            <StyledLink to={`/savageSheet/${character._id}`} >
              <Avatar src="https://cdn.imgbin.com/3/11/14/imgbin-knight-errant-fantasy-warrior-concept-medival-knight-gSsVXCk9CYwwJDzV1pPycxBer.jpg" />
              <h3>{character.details.characterName}</h3>
              <p>{character.details.campaign}</p>
            </StyledLink>
            {edit && (

              <button onClick={() => (deleteCharacter({
                variables: { ids: [character._id] }
              })
                // TODO: Refresh page when a character has been deleted
                // Also probably an alert or "Are you sure? modal"
              )}>
                Delete
            </button>
            )}
          </Character>
        ))}
      </CharacterWrapper>
    </Wrapper>
  )
}
