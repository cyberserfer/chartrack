import React, { Component } from 'react'
import SavageAbilities from '../component/SavageAbilities'
import SavageSkills from '../component/SavageSkills'
import SavageDerivedStats from '../component/SavageDerivedStats'

export default class SavageSheet extends Component {
  render() {
    return (
      <ul className="sheetColumns">
        <li>
          <SavageAbilities />
          <SavageDerivedStats />
        </li>
        <li>
          <SavageSkills />
        </li>
      </ul>
    )
  }
}
