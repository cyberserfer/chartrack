import React, { useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import ADD_CHARACTER from '../queries/add-character'
import GET_CHARACTER from '../queries/get-character'
import CharacterDetails from '../shared/CharacterDetails'
import DicePoolMapper from '../shared/DicePoolMapper'
import SavageDerivedStats from '../component/SavageDerivedStats'
import { Link } from '@reach/router'
import get from 'lodash.get'

// templates
import characterDetailsTemplate from '../templates/character-details-template'
import attributesTemplate from '../templates/attributes-template'
import swadeSkillsTemplate from '../templates/swade-skills-template'

export default ({ path, uri, location, navigate}) => {
  // pathId will either be 'addNewCharacter' or a character ID
  const pathId = window.location.pathname.split('/')[2] || null
  const [addingNewCharacter, toggleAddingNewCharacter] = useState(pathId === 'addNewCharacter')
  const [savingCharacterStatus, setSavingCharacterStatus] = useState('')
  const [characterState, setCharacterState] = useState({})
  const [addSheet, { data: addSheetResponse, loading: addSheetLoading, error: addSheetError }] = useMutation(ADD_CHARACTER)
  const { data: { character = {} } = {}, loading, error } = useQuery(
    GET_CHARACTER, { variables: { _id: pathId }, skip: addingNewCharacter }
  )

  const updateDetailsAttributes = ({target: { name, value}}, { category }) => {
    // cast attribute value to a number
    value = category !== 'details' ? Number(value) : value
    return setCharacterState({
      ...characterState,
      [category]: {
        ...characterState[category],
        [name] : value
      }
    })
  }
  console.log(characterState)
  // Skills are in an array
  const updateSkills = ({target: { name, value }}, { field: { baseAttribute } }) => {
    let skills = get(characterState, 'skills', []).length ? [ ...characterState.skills, { name, value: Number(value), baseAttribute }] : [{ name, value: Number(value), baseAttribute }] 
    setCharacterState({
      ...characterState,
      skills
    })
  }

  useEffect(() => console.log('character state:', character, characterState))

  const handleSubmit = e => {
    e.preventDefault()
    addSheet({ variables: characterState })
    if (addSheetLoading) {
      setSavingCharacterStatus('saving...')
    }
    if (addSheetError) {
      setSavingCharacterStatus('FUCK THERE WAS AN ERROR!!!')
      console.log(addSheetError)
    }
    setSavingCharacterStatus('SUCCESS!')
    console.log('saved character data', addSheetResponse, savingCharacterStatus)
  }

  if (loading) {
    return <h1> CALM DOWN YOUR CHARACTER IS LOADING! </h1>
  }
  if (error) {
    return <h1> FUCK THERE WAS AN ERROR!!! </h1>
  }
  
  const { details, attributes, skills, edges, hindrances, items, powers} = character
  return (
    <>
      <div style={{ margin: '1em', display: 'flex' }}>
        <form style={{margin: '1em'}} onSubmit={handleSubmit}>
          <input
            type='submit'
            onSubmit={e => handleSubmit(e)}
            value={
              addingNewCharacter
                ? 'Create New Character'
                : 'Save Existing Character'
            }
          />
        </form>
        <span>{savingCharacterStatus}</span>
        <div style={{margin: '1em'}}>
        <Link to={'/'} >Back To My Characters</Link>
        </div>
      </div>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
      <CharacterDetails
        data={details}
        template={characterDetailsTemplate}
        updateFunction={updateDetailsAttributes}
      />
      <DicePoolMapper
        data={attributes}
        template={attributesTemplate}
        updateFunction={updateDetailsAttributes}
      />
      <SavageDerivedStats baseStats={characterState} />
      <DicePoolMapper
        data={skills}
        template={swadeSkillsTemplate}
        updateFunction={updateSkills}
      />
      </div>
    </>
  )
}
