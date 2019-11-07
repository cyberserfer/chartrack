import React, { Component } from 'react';
import SavageAbilities from '../component/SavageAbilities';
import SavageSkills from '../component/SavageSkills';
import SavageDerivedStats from '../component/SavageDerivedStats';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
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

    async handleClick() {
        const writeBody = JSON.stringify(this.state)
    console.log(writeBody)
        try {
            const response = await fetch('http://localhost:8080/write', {
                method: 'put',
                body: writeBody,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            const json = await response.json();
            console.log('Success:', JSON.stringify(json));
        } catch (error) {
        console.error('Error:', error);
        }
    };

    render() {
        console.log('skills');
        console.log(skills);

        return (
            <>
                <Grid container spacing={3}>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={11}>

                    <Button
                        onClick={() =>  this.handleClick()}>
                        Save Character Info
                    </Button>
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
            </>
        );
    }
}
