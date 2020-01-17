import React, { useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import ADD_CHARACTER from '../queries/add-character'
import GET_CHARACTER from '../queries/get-character'
import CharacterDetails from '../shared/CharacterDetails'
import DicePoolMapper from '../shared/DicePoolMapper'
import SavageDerivedStats from '../component/SavageDerivedStats'

// templates
import characterDetailsTemplate from '../templates/character-details-template'
import attributesTemplate from '../templates/attributes-template'
import swadeSkillsTemplate from '../templates/swade-skills-template'




export default ({ path, uri, location, navigate}) => {
  
  const characterId = window.location.pathname.split('/')[2] || null
  console.log('character id', characterId)
  const [characterState, setCharacterState] = useState({})

  const [addSheet, { savedCharacterData, saveSheetLoading, saveSheetError }] = useMutation(ADD_CHARACTER)
  const { data: { character = {} } = {}, loading, error } = useQuery(
    GET_CHARACTER,
    {
      variables: { _id: characterId },
      skip: !characterId
    }
  )

  if (character && !characterState) {
    // setState(character)
  }

  const updateFunction = (category, {target: { name, value}}) => setCharacterState({
      ...characterState,
      [category]: {
        ...characterState[category],
        [name] : value
      }
    })

  useEffect(() => console.log('character state:', characterState))


  const handleSubmit = e => {
    e.preventDefault()

    

    addSheet({ variables: characterState })
    if (saveSheetError) {
      console.log(saveSheetError)
    }
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
            path === '/savageSheet/addNewCharacter'
              ? 'Create New Character'
              : 'Save Existing Character'
          }
        />
      </form>
      <CharacterDetails
            data={character.details}
            template={characterDetailsTemplate}
            updateFunction={updateFunction}
          />
      <DicePoolMapper
            data={character.attributes}
            template={attributesTemplate}
          />
      <SavageDerivedStats baseStats={character} />
      <DicePoolMapper
            data={character.skills}
            template={swadeSkillsTemplate}
          />
    </>
  )
}
