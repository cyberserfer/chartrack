import React, { useState } from 'react'
import SheetForm from './SheetForm'
import { navigate } from '@reach/router'

export default function CharacterSheet ({ addingNewCharacter }) {
  const [state, setState] = useState({ addingNewCharacter })

  if (!characterId && !state.addingNewCharacter) {
    return (
      <button
        onClick={() => {
          setState({ addingNewCharacter: true })
          navigate('../savageSheet/addNewCharacter')
        }}
      >
        Add new character
      </button>
    )
  }
  consolel.log(characterId)
  return <SheetForm />
}
