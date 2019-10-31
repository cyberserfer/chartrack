import React, { Component } from 'react';
import SavageAbilities from '../component/SavageAbilities';
import SavageSkills from '../component/SavageSkills';
import SavageDerivedStats from '../component/SavageDerivedStats';
import Grid from '@material-ui/core/Grid';

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

    updateAttributes = e => this.setState({
        attributes: {
            ...this.state.attributes,
            [e.target.name]: e.target.value
        }
    });

    updateSkills = e => this.setState({
        skills: {
            ...this.state.skills,
            [e.target.name]: e.target.value
        }
    });

    render() {
        return (
            <span>
                <Grid container spacing={3}>
                    <Grid item xs={1}>
                        <span />
                    </Grid>
                    <Grid item xs={5}>
                        <SavageAbilities
                            updateAttributes={this.updateAttributes}
                            attributes={this.state.attributes}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <SavageDerivedStats
                            baseStats={this.state}
                        />
                    </Grid>
                    <Grid item xs={1}>
                        <span />
                    </Grid><Grid item xs={5}>
                        <SavageSkills
                            updateSkills={this.updateSkills}
                            skills={this.state.skills}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <span />
                    </Grid>
                </Grid>
                <ul className='sheetColumns'>

                    <li>

                    </li>
                </ul>
            </span>
        );
    }
}
