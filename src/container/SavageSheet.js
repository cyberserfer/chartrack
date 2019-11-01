import React, { Component } from 'react';
import SavageAbilities from '../component/SavageAbilities';
import SavageSkills from '../component/SavageSkills';
import SavageDerivedStats from '../component/SavageDerivedStats';
import Grid from '@material-ui/core/Grid';
import SavageDescription from '../component/SavageDescription';

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
            Acedemics: 0,
            Athletics: 6,
            Battle: 0,
            Boating: 4,
            CommonKnowledge: 0,
            Driving: 0,
            Electronics: 0,
            Faith: 0,
            Fighting: 8,
            Focus: 0, 
            Gambling: 8,
            Hacking: 0,
            Healing: 10,
            Intimidation: 12,
            Language: 4,
            Noitce: 4,
            Occult: 0,
            Performance: 0,
            Persuasion: 4,
            Piloting: 0,
            Psionics: 0,
            Repair: 0,
            Research: 0,
            Riding: 0,
            Science: 0,
            Shooting: 0,
            Spellcasting: 0,
            Stealth: 4,
            Survival: 0,
            Taunt: 0,
            Thievery: 0,
            WeirdScience: 0,
        },
        description: {
            Name: 'John Smith',
            Race: 'Huamn',
            Height: '6 2',
            Weight: '200',
            Hair: 'brown',
            Eyes: 'green',
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

    updateDescription = e => this.setState({
        description: {
            ...this.state.description,
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
                    <Grid item xs={11}>
                        <SavageDescription
                            updateDescription={this.updateAttributes}
                            description={this.state.description}
                        />
                    </Grid>
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
