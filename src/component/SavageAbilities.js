import React, { Component } from 'react';

export default class SavageAbilities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attributes: {
                agility: 4,
                smarts: 6,
                spirit: 0,
                strength: 8,
                vigor: 8,
            }
        }

        this.updateSkill = this.updateSkill.bind(this);
    }

    updateAttributes(e) {
        console.log(e);
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div>
                <h2>Attributes</h2>
                <div>
                    <div>Agility:
                        <select name="agility" defaultValue={this.state.attributes.agility} onChange={this.updateAttributes}>
                            <option value="0">0 </option>
                            <option value="4">4</option>
                            <option value="6">6</option>
                            <option value="8">8</option>
                            <option value="10">10</option>
                            <option value="12">12</option>
                        </select>
                    </div>
                    <div>Smarts:
                        <select name="smarts" defaultValue={this.state.attributes.smarts} onChange={this.updateAttributes}>
                            <option value="0">0 </option>
                            <option value="4">4</option>
                            <option value="6">6</option>
                            <option value="8">8</option>
                            <option value="10">10</option>
                            <option value="12">12</option>
                        </select>
                    </div>
                    <div>Spirit:
                        <select name="spirit" defaultValue={this.state.attributes.spirit} onChange={this.updateAttributes}>
                            <option value="0">0 </option>
                            <option value="4">4</option>
                            <option value="6">6</option>
                            <option value="8">8</option>
                            <option value="10">10</option>
                            <option value="12">12</option>
                        </select>
                    </div>
                    <div>Strength:
                        <select name="strength" defaultValue={this.state.attributes.spirit} onChange={this.updateAttributes}>
                            <option value="0">0 </option>
                            <option value="4">4</option>
                            <option value="6">6</option>
                            <option value="8">8</option>
                            <option value="10">10</option>
                            <option value="12">12</option>
                        </select>
                    </div>
                    <div>Vigor:
                        <select name="vigor" defaultValue={this.state.attributes.vigor} onChange={this.updateAttributes}>
                            <option value="0">0 </option>
                            <option value="4">4</option>
                            <option value="6">6</option>
                            <option value="8">8</option>
                            <option value="10">10</option>
                            <option value="12">12</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}
