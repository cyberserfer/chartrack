import React from 'react'
import styled from 'styled-components'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const GET_CHARACTERS = gql`
    query {
        characters(input: { $userId: String }) {
            characters()
        }
    }
`

const List = styled.ul`
    padding: 8px;
`


export default function CharacterSelect(props) {
    return (
        <div>
            <h1>Character Selection</h1>
            <List></List>
        </div>
    )
}