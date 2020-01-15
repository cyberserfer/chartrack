import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import GET_CHARACTER from '../queries/get-character'
import CharacterDetails from '../shared/CharacterDetails'
import DicePoolMapper from '../shared/DicePoolMapper'
import SavageDerivedStats from '../component/SavageDerivedStats'
// import gql from 'graphql-tag'

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

export default ({ addingNewCharacter, characterId }) => {
  const [state, setState] = useState({
    addingNewCharacter,
    character: null
  })

  const { data: { character = {} } = {}, loading, error } = useQuery(
    GET_CHARACTER,
    {
      variables: { _id: characterId },
      skip: !characterId
    }
  )

  if (character && !state.character) {
    // setState(character)
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  if (loading) {
    return <h1> CALM DOWN YOUR CHARACTER IS LOADING! </h1>
  }
  if (error) {
    return <h1> FUCK THERE WAS AN ERROR!!! </h1>
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
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
      <CharacterDetails />
      <DicePoolMapper />
      <SavageDerivedStats />
    </>
  )
}
