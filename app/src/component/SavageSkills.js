import React from 'react'
import List from '../shared/List'

const SavageSkills = ({ updateSkills, skills, possibleValues }) => (
  <div>
    <h2>Skills</h2>
    <div>
      {Object.entries(skills).map(skill => {
        const objName = skill[0]
          const objValue = skill[1]
          return (
            <List 
              objName={objName}
              objValue={objValue}
              possibleValues={possibleValues} 
              funcOne={updateSkills} 
            />
          )
      })}
    </div>
  </div>
)
export default SavageSkills
