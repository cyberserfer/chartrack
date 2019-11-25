import React from 'react'
import List from '../shared/List'
import PropTypes from 'prop-types'

const SavageSkills = ({ updateSkills, skills, possibleValues }) => (
  <div>
    <h2>Skills</h2>
    <div>
      {Object.entries(skills).map(skill => {
        const objName = skill[0]
          const objValue = skill[1]
          return (
            <List 
              key={objName}
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
SavageSkills.propTypes = {
  updateSkills: PropTypes.func,
  skills: PropTypes.object,
  possibleValues: PropTypes.array
}

export default SavageSkills
