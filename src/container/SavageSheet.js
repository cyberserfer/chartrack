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
            derived: {
                maxEncum: 0
            }
        }

        this.updateAttributes = this.updateAttributes.bind(this);
        this.updateMaxEncumberance = this.updateMaxEncumberance.bind(this);
    }

    updateMaxEncumberance() {
        console.log("updateMaxEncum");
        console.log(this.state.attributes.Strength);

        switch (this.state.attributes.Strength) {
            case 4:
                this.setState({ derived: { ...this.state.derived, maxEncum: 20 } })
                break;
            case 6:
                this.setState({ derived: { ...this.state.derived, maxEncum: 40 } })
                break;
            case 8:
                this.setState({ derived: { ...this.state.derived, maxEncum: 60 } })
                break;
            case 10:
                this.setState({ derived: { ...this.state.derived, maxEncum: 80 } })
                break;
            case 12:
                this.setState({ derived: { ...this.state.derived, maxEncum: 100 } })
                break;
            default:
                this.setState({ derived: { ...this.state.derived, maxEncum: "error" } })
        }
    }

    updateAttributes(e) {
        this.setState({ attributes: { ...this.state.attributes, [e.target.name]: e.target.value } })
        this.updateMaxEncumberance()
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
