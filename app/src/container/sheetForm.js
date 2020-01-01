
import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import GET_CHARACTER from '../queries/get-character'
import CharacterDetails from '../shared/CharacterDetails'
import DicePoolMapper from '../shared/DicePoolMapper'
import SavageDerivedStats from '../component/SavageDerivedStats'

// templates
import characterDetailsTemplate from '../templates/character-details-template'
import attributesTemplate from '../templates/attributes-template'
import swadeSkillsTemplate from '../templates/swade-skills-template'

export default ({ characterId }) => {
  const [state, setState] = useState({
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

  return (
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
  )
}