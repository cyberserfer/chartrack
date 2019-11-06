import React, { Component } from 'react';

export default class SavageDerivedStats extends Component {

    render() {

        const { Vigor } = this.props.baseStats.attributes
        const { Fighting } = this.props.baseStats.skills
        const { maxEncum } = this.props.baseStats.derived

        return (
            <div>
                <h2>Derived Stats</h2>
                <div>
                    <div>Pace: 6</div>
                    <span style={{ fontSize: '50%' }}>It’s 6 unless you have Edges or Hindrances that modify it</span>
                    <div>Parry: {2 + (Fighting / 2)}</div>
                    <span style={{ fontSize: '50%' }}>2 + Half Fighting</span>
                    <div>Toughness: {2 + (Vigor / 2)}</div>
                    <span style={{ fontSize: '50%' }}>2 + Half Vigor</span>
                    <div>Max Encumbrance: {maxEncum} </div>
                </div>
            </div>
        );
    }
}
