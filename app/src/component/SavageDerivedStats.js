import React from 'react'
import get from 'lodash.get'

export default ({baseStats: {attributes, skills}}) => {
  console.log('savage derived stats', attributes, skills)
  const fighting = skills ? get(skills.find(prop => prop.name === 'Fighting'),
    'value',
    0
  ) : 0

  const strength = get(attributes, 'strength', 0)
  const vigor = get(attributes, 'vigor', 0)

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
    <div>
      <h2>Derived Stats</h2>
      <div>
        <div>Pace: 6</div>
        <span style={{fontSize: '50%'}}>
          It’s 6 unless you have Edges or Hindrances that modify it
        </span>
        <div>Parry: {2 + fighting / 2}</div>
        <span style={{fontSize: '50%'}}>2 + Half Fighting</span>
        <div>Toughness: {2 + (vigor || 0) / 2}</div>
        <span style={{fontSize: '50%'}}>2 + Half Vigor</span>
        <div>Max Encumbrance: {maxEncumberance()} </div>
      </div>
    </div>
  )
}
