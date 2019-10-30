import React, { Component } from 'react';
//import SkillValues from './SkillValues'

export default class SavageSkills extends Component {
    possibleValues = [ 0,4,6,8,10,12 ]

    render() {
        const { updateSkills, skills } = this.props
        const skillEntries = Object.entries(skills)
        return (
            <div>
                <h2>Attributes</h2>
                <div>
                    {skillEntries.map(skill => {
                        const key = skill[0]
                        const value = skill[1]
                        return (
                            <div key={key}>{key} 
                                <select 
                                    name={key}
                                    onChange={e => updateSkills(e)}
                                    defaultValue={value}
                                >
                                {this.possibleValues.map((item, i) =>
                                    <option 
                                        key={i} 
                                        value={item}
                                    >
                                        {item}
                                    </option>)}
                                </select>
                        </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}
