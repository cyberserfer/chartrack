import React, { Component } from 'react';
import SavageAbilities from '../component/SavageAbilities';
import SavageSkills from '../component/SavageSkills';
import SavageDerivedStats from '../component/SavageDerivedStats';

export default class SavageSheet extends Component {
    state = {
        attributes: {
            Agility: 4,
            Smarts: 6,
            Spirit: 0,
            Strength: 8,
            Vigor: 8,
        },
        skills: {
            Boating: 4,
            Climbing: 6,
            Driving: 0,
            Fighting: 8,
            Gambling: 8,
            Healing: 10,
            Intimidation: 12,
            Investigation: 4,
        }
    }

    updateAttributes = e => this.setState({ attributes: {
        ...this.state.attributes,
        [e.target.name]: e.target.value } });

    updateSkills = e => this.setState({ skills: {
        ...this.state.skills,
        [e.target.name]: e.target.value } });

    render() {
        return (
            <ul className='sheetColumns'>
                <li>
                    <SavageAbilities 
                        updateAttributes = {this.updateAttributes}
                        attributes={this.state.attributes}
                    />
                    <SavageDerivedStats
                        baseStats={this.state}
                     />
                </li>
                <li>
                    <SavageSkills 
                        updateSkills = {this.updateSkills}
                        skills = {this.state.skills}
                    />
                </li>
            </ul>
        );
    }
}
