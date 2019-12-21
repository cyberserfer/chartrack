import React, {useState} from 'react'
import SheetForm from './sheetForm'

export default function CharacterSheet(props) {
  const [state, setState] = useState({
    addingNewCharacter: props.addingNewCharacter
  })

  const characterId = !state.addingNewCharacter
    ? window.location.pathname.split('/')[2]
    : null

  if (!characterId && !state.addingNewCharacter) {
    return (
      <button
        onClick={() => {
          setState({addingNewCharacter: true})
          props.history.push('../savageSheet/addNewCharacter')
        }}
      >
        Add new character
      </button>
    )
  }

  return <SheetForm characterId={characterId}/>

}