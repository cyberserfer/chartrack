import React, { useState, useEffect } from 'react'
import SavageAbilities from '../component/SavageAbilities'
import SavageSkills from '../component/SavageSkills'
import SavageDerivedStats from '../component/SavageDerivedStats'
import Grid from '@material-ui/core/Grid'
import SavageDescription from '../component/SavageDescription'
import SavageEdges from '../component/SavageEdges'
import {
  possibleValues,
  attributes,
  description,
  skills
} from '../data/customData.json'
import { edges } from '../data/savageEdges.json'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const GET_CHARACTER = gql`
  query getCharacter($id: ID!) {
      character(input: {_id: $id}) {
        _id
      }
    }
`

const charId = window.location.pathname.split('/')[2]
console.log(charId)

export default function CharacterSheet (props) {
  // TODO: use data in the component when i can actually call data
  const { data, loading, error } = useQuery(GET_CHARACTER, { variables: { id: charId } })
  const [state, setState] = useState({
    attributes: attributes,
    description: description,
    skills: skills,
    derived: {
      maxEncum: 20
    },
    currentEdges: ['Alertness', 'Aristocrat', 'Berserk']
  })
  const updateMaxEncumberance = () => {
    let newVal
    const evalStrength = parseInt(state.attributes.Strength)

    switch (evalStrength) {
      case 4:
        newVal = 20
        break
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
        newVal = 0
    }
    setState({ derived: { ...state.derived, maxEncum: newVal } })
  }
  const updateAttributes = e => {
    setState(
      {
        attributes: {
          ...state.attributes,
          [e.target.name]: e.target.value
        }
      }
    )
  }
  const updateSkills = e =>
    setState({
      skills: {
        ...state.skills,
        [e.target.name]: e.target.value
      }
    })
  if (loading) {
    return <h1>CALM DOWN YOUR CHARACTER IS LOADING!</h1>
  }
  if (error) {
    return <h1>FUCK THERE WAS AN ERROR!!!</h1>
  }
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={1} />
        <Grid item xs={11}>
          <SavageDescription
            updateDescription={updateAttributes}
            description={state.description}
          />
        </Grid>
        <Grid item xs={1}>
          <span />
        </Grid>
        <Grid item xs={5}>
          <SavageAbilities
            updateAttributes={updateAttributes}
            attributes={state.attributes}
            possibleValues={possibleValues}
            updateMaxEncumberance={updateMaxEncumberance}
          />
        </Grid>
        <Grid item xs={6}>
          <SavageDerivedStats baseStats={state} />
        </Grid>
        <Grid item xs={1}>
          <span />
        </Grid>
        <Grid item xs={5}>
          <SavageSkills
            updateSkills={updateSkills}
            skills={state.skills}
            possibleValues={possibleValues}
          />
        </Grid>
        <Grid item xs={6}>
          <SavageEdges
            currentEdges={state.currentEdges}
            edgesList={edges}
          />
        </Grid>
      </Grid>
      <ul className='sheetColumns'>
        <li />
      </ul>
    </>
  )
}
