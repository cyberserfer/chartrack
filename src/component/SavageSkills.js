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
                    <select name="boating" onChange={this.updateSkill}>
                        <option value="0">0 </option>
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                        <option value="12">12</option>
                    </select>
                </div>
                <div>Climbing (Str): <input type='text' name='climbing' onChange={this.updateSkill} defaultValue={this.state.skills.climbing} /> </div>
                <div>Driving (Agi): <input type='text' name='driving' onChange={this.updateSkill} defaultValue={this.state.skills.driving} /> </div>
                <div>Fighting (Agi): <input type='text' name='fighting' onChange={this.updateSkill} defaultValue={this.state.skills.fighting} /> </div>
                <div>Gambling (Sma): <input type='text' name='gambling' onChange={this.updateSkill} defaultValue={this.state.skills.gambling} /> </div>
                <div>Healing (Sma): <input type='text' name='healing' onChange={this.updateSkill} defaultValue={this.state.skills.healing} /> </div>
                <div>Intimidation (Spi): <input type='text' name='intimidation' onChange={this.updateSkill} defaultValue={this.state.skills.intimidation} /> </div>
                <div>Investigation (Sma): <input type='text' name='investigation' onChange={this.updateSkill} defaultValue={this.state.skills.investigation} /> </div>
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
