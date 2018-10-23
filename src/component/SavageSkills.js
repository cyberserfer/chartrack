import React, { Component } from 'react';
//import SkillValues from './SkillValues'

export default class SavageSkills extends Component {

    constructor(props) {
        super(props);
        this.state = {
            skills: {
                boating: 4,
                climbing: 6,
                driving: 0,
                fighting: 8,
                gambling: 8,
                healing: 10,
                intimidation: 12,
                investigation: 4,
            }
        }

        this.updateSkill = this.updateSkill.bind(this);
    }
    updateSkill(e) {
        console.log(e);
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div>
                <h2>Skills</h2>
                <div>Boating (Agi):
                    <select name="boating" defaultValue={this.state.skills.boating} onChange={this.updateSkill}>
                        <option value="0">0 </option>
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                        <option value="12">12</option>
                    </select>
                </div>
                <div>Climbing (Str):
                    <select name="climbing" defaultValue={this.state.skills.climbing} onChange={this.updateSkill}>
                        <option value="0">0 </option>
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                        <option value="12">12</option>
                    </select>
                </div>
                <div>Driving (Agi):
                    <select name="driving" defaultValue={this.state.skills.driving} onChange={this.updateSkill}>
                        <option value="0">0 </option>
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                        <option value="12">12</option>
                    </select>
                </div>
                <div>Fighting (Agi):
                   <select name="fighting" defaultValue={this.state.skills.fighting} onChange={this.updateSkill}>
                        <option value="0">0 </option>
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                        <option value="12">12</option>
                    </select>
                </div>
                <div>Gambling (Sma):
                    <select name="gambling" defaultValue={this.state.skills.gambling} onChange={this.updateSkill}>
                        <option value="0">0 </option>
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                        <option value="12">12</option>
                    </select>
                </div>
                <div>Healing (Sma):
                    <select name="healing" defaultValue={this.state.skills.healing} onChange={this.updateSkill}>
                        <option value="0">0 </option>
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                        <option value="12">12</option>
                    </select>
                </div>
                <div>Intimidation (Spi):
                    <select name="intimidation" defaultValue={this.state.skills.intimidation} onChange={this.updateSkill}>
                        <option value="0">0 </option>
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                        <option value="12">12</option>
                    </select>
                </div>
                <div>Investigation (Sma):
                    <select name="investigation" defaultValue={this.state.skills.investigation} onChange={this.updateSkill}>
                        <option value="0">0 </option>
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                        <option value="12">12</option>
                    </select>
                </div>

            </div>
        );
    }
}
