
import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import {useQuery} from '@apollo/react-hooks'
import GET_CHARACTER from '../queries/get-character'
import CharacterDetails from '../shared/CharacterDetails'
import DicePoolMapper from '../shared/DicePoolMapper'
import SavageDerivedStats from '../component/SavageDerivedStats'
import gql from 'graphql-tag';

// templates
import characterDetailsTemplate from '../templates/character-details-template'
import attributesTemplate from '../templates/attributes-template'
import swadeSkillsTemplate from '../templates/swade-skills-template'

// TODO: Make this work
// const ADD_CHARACTER = gql`
//   mutation addCharacter($sheet: Object) {
//       details {
//           characterName
//           _id
//       }
//   }
// `

export default (props) => {
    const [state, setState] = useState({
      addingNewCharacter: props.addingNewCharacter,
      character: null
    })
    
    const {data: {character = {}} = {}, loading, error} = useQuery(
        GET_CHARACTER,
        {
          variables: {_id: props.characterId},
          skip: !props.characterId
        }
      )
    
      if (character && !state.character) {
        // setState(character)
        console.log(character, state.character)
      }

    const handleSubmit = e => {
        e.preventDefault()
        console.log('submitting...', e.target, state)
        return
      }

    if (loading) {
        return <h1> CALM DOWN YOUR CHARACTER IS LOADING! </h1>
      }
      if (error) {
        return <h1> FUCK THERE WAS AN ERROR!!! </h1>
      }
    console.log('state.props.addingNewCharacter', state.addingNewCharacters, 'props', props)
    return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={1} />
        <Grid item xs={11}>
          <CharacterDetails
            data={character.details}
            template={characterDetailsTemplate}
          />
        </Grid>
        <Grid item xs={1}>
          <span />
        </Grid>
        <Grid item xs={5}>
          <DicePoolMapper
            data={character.attributes}
            template={attributesTemplate}
          />
        </Grid>
        <Grid item xs={6}>
          <SavageDerivedStats baseStats={character} />
        </Grid>
        <Grid item xs={1}>
          <span />
        </Grid>
        <Grid item xs={5}>
          <DicePoolMapper
            data={character.skills}
            template={swadeSkillsTemplate}
          />
        </Grid>
        {/* <Grid item xs={6}>
          <SavageEdges currentEdges={state.currentEdges} edgesList={edges} />
        </Grid> */}
      </Grid>
      <input
        type='submit'
        onSubmit={e => handleSubmit(e)}
        value={
          state.addingNewCharacter
            ? 'Create New Character'
            : 'Save Existing Character'
        }
      />
    </form>
  )
}