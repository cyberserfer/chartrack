import React, { Component } from 'react';
import SavageAbilities from '../component/SavageAbilities';
import SavageSkills from '../component/SavageSkills';
import SavageDerivedStats from '../component/SavageDerivedStats';
import Grid from '@material-ui/core/Grid';
import SavageDescription from '../component/SavageDescription';
import SavageEdges from '../component/SavageEdges';
import { possibleValues, attributes, description, skills } from '../customData.json';

export default class SavageSheet extends Component {

    state = {
        attributes: attributes,
        description: description,
        skills: skills,
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
        console.log('skills');
        console.log(skills);

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
                            possibleValues={possibleValues}
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
                            possibleValues={possibleValues}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <SavageEdges />
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
