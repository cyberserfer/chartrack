import React, { useState } from 'react'
import SheetForm from './sheetForm'
import { navigate } from '@reach/router'

export default function CharacterSheet ({ addingNewCharacter }) {
  const [state, setState] = useState({ addingNewCharacter })

  const characterId = !state.addingNewCharacter
    ? window.location.pathname.split('/')[2]
    : null

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

  return <SheetForm characterId={characterId} />
}
