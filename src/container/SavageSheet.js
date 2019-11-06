import React, { Component } from 'react';
import SavageAbilities from '../component/SavageAbilities';
import SavageSkills from '../component/SavageSkills';
import SavageDerivedStats from '../component/SavageDerivedStats';
import Grid from '@material-ui/core/Grid';
import SavageDescription from '../component/SavageDescription';
import SavageEdges from '../component/SavageEdges';
import { possibleValues, attributes, description, skills } from '../data/customData.json';

export default class SavageSheet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            attributes: attributes,
            description: description,
            skills: skills,
            derived: {}
        }

        this.updateAttributes = this.updateAttributes.bind(this);
        this.updateMaxEncumberance = this.updateMaxEncumberance.bind(this);
    }

    componentDidMount() {
        this.updateMaxEncumberance();
    }

    updateMaxEncumberance() {
        let newVal
        let evalStrength = parseInt(this.state.attributes.Strength)
        console.log('val of Strength in updateMaxEncumbrance')
        console.log(this.state.attributes.Strength)

        switch (evalStrength) {
            case 4:
                newVal = 20
                break;
            case 6:
                newVal = 40
                break;
            case 8:
                newVal = 60
                break;
            case 10:
                newVal = 80
                break;
            case 12:
                newVal = 100
                break;
            default:
                newVal = 0
        }
        console.log('newVal')
        console.log(newVal)
        this.setState({ derived: { ...this.state.derived, maxEncum: newVal } })

    }

    updateAttributes(e) {
        this.setState({ attributes: { ...this.state.attributes, [e.target.name]: e.target.value } }, this.updateMaxEncumberance);

    }


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
                            possibleValues={possibleValues}
                            updateMaxEncumberance={this.updateMaxEncumberance}

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
