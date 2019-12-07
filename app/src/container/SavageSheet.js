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

export default function CharacterSheet (props) {
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
