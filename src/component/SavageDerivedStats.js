import React, { Component } from 'react'

export default class SavageDerivedStats extends Component {
  constructor(props) {
    super(props)
    this.state = {
      derivedStats: {
        pace: 6,
        parry: 6,
        toughness: 0,
        charisma: 8,
      },
    }
  }

  render() {
    return (
      <div>
        <h2>Derived Stats</h2>
        <div>
          <div>Pace: </div>
          <div>Parry: </div>
          <div>Toughness: </div>
          <div>Charisma: </div>
        </div>
      </div>
    )
  }
}
