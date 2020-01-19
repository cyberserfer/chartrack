import React, { useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import ADD_CHARACTER from '../queries/add-character'
import UPDATE_CHARACTER from '../queries/update-character'
import GET_CHARACTER from '../queries/get-character'
import CharacterDetails from '../shared/CharacterDetails'
import DicePoolMapper from '../shared/DicePoolMapper'
import ListManager from '../container/ListManager'
import SavageDerivedStats from '../component/SavageDerivedStats'
import { Link } from '@reach/router'
import get from 'lodash.get'
import set from 'lodash.set'
import uniqBy from 'lodash.uniqby'

// templates
import characterDetailsTemplate from '../templates/character-details-template'
import attributesTemplate from '../templates/attributes-template'
import swadeSkillsTemplate from '../templates/swade-skills-template'

export default () => {
  // pathId will either be 'addNewCharacter' or a character ID
  const pathId = window.location.pathname.split('/')[2] || null
  const addingNewCharacter = pathId === 'addNewCharacter'
  const [savingCharacterStatus, setSavingCharacterStatus] = useState('')
  const [addSheet, addSheetResponses] = useMutation(ADD_CHARACTER)
  const [updateSheet, updateSheetResponses] = useMutation(UPDATE_CHARACTER)
  let { data: { character = {} } = {}, loading, error } = useQuery(GET_CHARACTER, { variables: { _id: pathId }, skip: addingNewCharacter })
  const [characterState, setCharacterState] = useState()

  // useEffect(() => console.log('character:', character, 'state:', characterState))

  if (loading) {
    return <h1> CALM DOWN YOUR CHARACTER IS LOADING! </h1>
  }
  if (error) {
    return <h1> FUCK THERE WAS AN ERROR!!!</h1>
  }

  if (character & !characterState ) {
    setCharacterState(character)
  }

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

  const updateSkills = ({target: { name, value }}) => setCharacterState({ ...characterState, skills: uniqBy([ { name, value: Number(value) }, ...(characterState.skills || [])]) })
  
  // Edges, Hindrances, Items, Powers, are all just arrays of refs
  const updateList = (list, category) => setCharacterState({
    ...characterState, [category] : list.map(item => item._id) })

  const handleSubmit = e => {
    e.preventDefault()

// ===== Mapping state data to existing character data ====== 
// TODO: Figure out a better way to do all of this
    Object.keys(character).forEach((key) => {
      if (typeof character[key] === 'string') {
        character[key] = get(characterState, `${key}`, character[key])
      } 
      if (Array.isArray(character[key]) || Array.isArray(characterState[key]) ) {
        console.log('character at the index of key', key, character[key], characterState[key] )
        // skills should be saved as the original object array
        // all other arrays should be reduced to their ids to use as mongo refs
        if (key !== 'skills' && (character[key].length || (characterState[key] && characterState[key].length))) {
          
          // if the query populated an array with a document object, convert it back to a mongo ref before saving
          character[key] = character[key].map(el => typeof el === 'string' ? el : `${el._id}`)
          character[key] = get(characterState, `${key}`, character[key])
        }
        
      }
      if (typeof character[key] === 'object' && !character[key].length) {
        const keyRef = get(character, `${key}`)
        const stateKeyRef = get(characterState, `${key}`)
        Object.keys(keyRef).forEach(subKey => {
          console.log(subKey)
          const stateNestedField = get(stateKeyRef, `${subKey}`)
          if (stateNestedField) {
            set(character, `${key}.${subKey}`, stateNestedField)
          }
        })
      }
    })
    console.log('what will get saved', character)
    
    if (addingNewCharacter) {
      addSheet({ variables: characterState })
      if (addSheetResponses.loading) {
        setSavingCharacterStatus('saving...')
      }
      if (addSheetResponses.error) {
        setSavingCharacterStatus('FUCK THERE WAS AN ERROR!!!')
        console.log(addSheetResponses.error)
        return
      }
      setSavingCharacterStatus('SUCCESS!')
      console.log('saved character data', addSheetResponses, savingCharacterStatus)
    return
    }
    console.log('updating sheet...')
    // Changes to state override key collisions with the fetched data
    updateSheet({ variables: character })
    if (updateSheetResponses.loading) {
      setSavingCharacterStatus('saving...')
    }
    if (updateSheetResponses.error) {
      setSavingCharacterStatus('FUCK THERE WAS AN ERROR!!!')
      console.log(updateSheetResponses.error)
      return
    }
    console.log(updateSheetResponses)
    setSavingCharacterStatus('SUCCESS!')

  }
  const { details, attributes, skills, edges, hindrances, items, powers } = character
  
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
      <SavageDerivedStats 
        attributes={[get(characterState, 'attributes', get(character, 'attributes', {}))]}
        skills={uniqBy([ ...get(characterState, 'skills', []), ...skills], 'name')}
      />
      <DicePoolMapper
        data={uniqBy([ ...get(characterState, 'skills', []), ...skills], 'name')}
        template={swadeSkillsTemplate}
        updateFunction={updateSkills}
      />
      <ListManager 
        existingData={edges}
        dataKey="edges"
        title="Edges"
        updateFunction={updateList}
      />
      <ListManager
        existingData={hindrances} 
        dataKey="hindrances"
        title="Hindrances"
        updateFunction={updateList}
      />
      <ListManager
        existingData={powers} 
        dataKey="powers"
        title="Powers"
        updateFunction={updateList}
      />
      <ListManager
        existingData={items} 
        dataKey="items"
        title="Gear"
        updateFunction={updateList}
      />
      </div>
    </>
  )
}
