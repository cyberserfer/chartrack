import React from 'react'
import get from 'lodash.get'

export default ({baseStats: {attributes, skills}}) => {
  const fighting = skills ? get(skills.find(obj => obj['fighting']),
    'value',
    0
  ) : 0
  const strength = Number(get(attributes, 'strength', 0))
  const vigor = Number(get(attributes, 'vigor', 0))

  const maxEncumberance = () => {
    let newVal

    switch (strength) {
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
        newVal = 20
    }
    return newVal
  }

  return (
    <div style={{ margin: '1em'}}>
      <h2>Derived Stats</h2>
      <div>
        <div>Pace: 6</div>
        <span style={{fontSize: '75%'}}>
          It’s 6 unless you have Edges or Hindrances that modify it
        </span>
        <div>Parry: {2 + fighting / 2}</div>
        <span style={{fontSize: '75%'}}>2 + Half Fighting</span>
        <div>Toughness: {2 + (vigor || 4) / 2}</div>
        <span style={{fontSize: '75%'}}>2 + Half Vigor</span>
        <div>Max Encumbrance: {maxEncumberance()} </div>
      </div>
    </div>
  )
}
