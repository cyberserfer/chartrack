import React from 'react'
import get from 'lodash.get'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import styled from 'styled-components'

const GET_ENCUMBRANCE = gql`query items($ids: [ID]) { items(input: $ids ) { weight } }`

const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 16px;
  border: 1px solid ${props => props.theme.colors.lightGray};
  padding: 16px;
  height: auto;
  h2 {
    color: ${props => props.theme.colors.primary};
  }
`

export default ({ attributes, itemIds, skills }) => {
  const fighting = skills ? get(skills.find(obj => obj.name === 'fighting'), 'value', 0) : 0
  const strength = Number(get(attributes, 'strength', 0))
  const vigor = Number(get(attributes, 'vigor', 0))
  const { data, loading, error } = useQuery(GET_ENCUMBRANCE, { variables: { ids: itemIds } })

  let currentEncumbrance = 0
  if (!loading && !error) {
    const { items } = data
    currentEncumbrance = items.length && data.items.reduce((a, b) => ({ weight: a.weight + b.weight })).weight || 0
  }


  const maxEncumberance = () => {
    let newVal

    switch (strength) {
      case 6:
        newVal = 40
        break
      case 8:
        newVal = 60
        break
      case 10:
        newVal = 80
        break
      case 12:
        newVal = 100
        break
      default:
        newVal = 20
    }
    return newVal
  }

  return (
    <Wrapper>
      <h2>Derived Stats</h2>
      <div>
        <div>Pace: 6</div>
        <span style={{ fontSize: '75%' }}>
          It’s 6 unless you have Edges or Hindrances that modify it
        </span>
        <div>Parry: {2 + fighting / 2}</div>
        <span style={{ fontSize: '75%' }}>2 + Half Fighting</span>
        <div>Toughness: {2 + (vigor || 4) / 2}</div>
        <span style={{ fontSize: '75%' }}>2 + Half Vigor</span>
        <div>Max Encumbrance: {maxEncumberance()} </div>
        <div>Current Encumbrance: {currentEncumbrance}</div>
        <div style={{ color: 'red' }}>{currentEncumbrance > maxEncumberance() ? 'You are encumbered' : null}</div>
      </div>
    </Wrapper>
  )
}
