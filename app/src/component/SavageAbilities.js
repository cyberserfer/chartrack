import React from 'react'
import List from '../shared/List'

const SavageAbilities = ({ attributes, possibleValues, updateAttributes }) => (
  
  <div>
    <h2>Attributes</h2>
    <div>
      {Object.entries(attributes).map(attrib => {
          const objName = attrib[0]
          const objValue = attrib[1]
          return (
            <List 
              objName={objName}
              objValue={objValue}
              possibleValues={possibleValues} 
              funcOne={updateAttributes} 
            />
          )
      })}
    </div>
  </div>
  )

export default SavageAbilities
