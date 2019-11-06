import React, { Component } from 'react';

export default class SavageDerivedStats extends Component {

    render() {
        let maxEncum = 0;
        // maxEncom is not working
        const { Strength } = this.props.baseStats.attributes
        switch ( Strength){
            case 4:
                maxEncum = 20
                break;
            case 6:
                maxEncum = 40
                break;
            case 8:
                maxEncum = 60
                break;
            case 10:
                maxEncum = 80
                break;
            case 12:
                maxEncum = 100
                break;
            default:
                maxEncum = "error"
        }
        const { Vigor } = this.props.baseStats.attributes
        const { Fighting } = this.props.baseStats.skills
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
                    <div>Max Encumbrance: { maxEncum } </div>
                </div>
            </div>
        );
    }
}
