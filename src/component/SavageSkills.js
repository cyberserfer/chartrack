import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
//import SkillValues from './SkillValues'

export default class SavageSkills extends Component {
    possibleValues = [0, 4, 6, 8, 10, 12]

    render() {
        const { updateSkills, skills } = this.props
        const skillEntries = Object.entries(skills)
        return (
            <div>
                <h2>Skills</h2>
                <div>
                    {skillEntries.map(skill => {
                        const key = skill[0]
                        const value = skill[1]
                        return (
                            <div key={key}>
                                <Grid container spacing={3}>
                                    <Grid item xs={4}>
                                        {key}
                                    </Grid>
                                    <Grid item xs={2}>
                                        <span />
                                    </Grid>
                                    <Grid item xs={6}>
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
                                    </Grid>
                                </Grid>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}
