import React, { Component } from 'react'

export default class SavageAbilities extends Component {
  constructor(props) {
    super(props)
    this.state = {
      attributes: {
        agility: 4,
        smarts: 6,
        spirit: 0,
        strength: 8,
        vigor: 8,
      },
    }
  }

  render() {
    return (
      <div>
        <h2>Attributes</h2>
        <div>
          <div>Agility: </div>
          <div>Smarts: </div>
          <div>Spirit: </div>
          <div>Strength: </div>
          <div>Vigor: </div>
        </div>
      </div>
    )
  }
}
