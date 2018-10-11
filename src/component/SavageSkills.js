import React, { Component } from 'react';

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
                    <select name="boating" value={this.state.skills.boating} onChange={this.updateSkill}>
                        <option value="0">0 </option>
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                        <option value="12">12</option>
                    </select>
                </div>
                <div>Climbing (Str):
                    <select name="climbing" value={this.state.skills.climbing} onChange={this.updateSkill}>
                        <option value="0">0 </option>
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                        <option value="12">12</option>
                    </select>
                </div>
                <div>Driving (Agi):
                    <select name="driving" onChange={this.updateSkill}>
                        <option value="0">0 </option>
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                        <option value="12">12</option>
                    </select>
                </div>
                <div>Fighting (Agi):
                   <select name="fighting" onChange={this.updateSkill}>
                        <option value="0">0 </option>
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                        <option value="12">12</option>
                    </select>
                </div>
                <div>Gambling (Sma):
                    <select name="gambling" onChange={this.updateSkill}>
                        <option value="0">0 </option>
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                        <option value="12">12</option>
                    </select>
                </div>
                <div>Healing (Sma):
                    <select name="healing" onChange={this.updateSkill}>
                        <option value="0">0 </option>
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                        <option value="12">12</option>
                    </select>
                </div>
                <div>Intimidation (Spi):
                    <select name="intimidation" onChange={this.updateSkill}>
                        <option value="0">0 </option>
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                        <option value="12">12</option>
                    </select>
                </div>
                <div>Investigation (Sma):
                    <select name="investigation" onChange={this.updateSkill}>
                        <option value="0">0 </option>
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                        <option value="12">12</option>
                    </select>
                </div>

                <div>Boating (Agi): {this.state.skills.boating} </div>
                <div>Climbing (Str): {this.state.skills.climbing} </div>
                <div>Driving (Agi): {this.state.skills.driving} </div>
                <div>Fighting (Agi): {this.state.skills.fighting} </div>
                <div>Gambling (Sma): {this.state.skills.gambling} </div>
                <div>Healing (Sma): {this.state.skills.healing} </div>
                <div>Intimidation (Spi): {this.state.skills.intimidation} </div>
                <div>Investigation (Sma): {this.state.skills.investigation} </div>

            </div>
        );
    }
}
