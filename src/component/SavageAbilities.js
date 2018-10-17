import React, { Component } from 'react';

export default class SavageAbilities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startingAtt: [
                {
                    name: "Agility",
                    possible: [

                        {
                            tag: "SW",
                            value: 4
                        }, {
                            tag: "SW",
                            value: 6
                        }, {
                            tag: "SW",
                            value: 8
                        }, {
                            tag: "SW",
                            value: 10
                        }, {
                            tag: "SW",
                            value: 12
                        }
                    ]
                },
                {
                    name: "Smarts",
                    possible: [

                        {
                            tag: "SW",
                            value: 4
                        }, {
                            tag: "SW",
                            value: 6
                        }, {
                            tag: "SW",
                            value: 8
                        }, {
                            tag: "SW",
                            value: 10
                        }, {
                            tag: "SW",
                            value: 12
                        }
                    ]
                },
                {
                    name: "Spirit",
                    possible: [

                        {
                            tag: "SW",
                            value: 4
                        }, {
                            tag: "SW",
                            value: 6
                        }, {
                            tag: "SW",
                            value: 8
                        }, {
                            tag: "SW",
                            value: 10
                        }, {
                            tag: "SW",
                            value: 12
                        }
                    ]
                },
                {
                    name: "Strength",
                    possible: [

                        {
                            tag: "SW",
                            value: 4
                        }, {
                            tag: "SW",
                            value: 6
                        }, {
                            tag: "SW",
                            value: 8
                        }, {
                            tag: "SW",
                            value: 10
                        }, {
                            tag: "SW",
                            value: 12
                        }
                    ]
                },
                {
                    name: "Vigor",
                    possible: [

                        {
                            tag: "SW",
                            value: 4
                        }, {
                            tag: "SW",
                            value: 6
                        }, {
                            tag: "SW",
                            value: 8
                        }, {
                            tag: "SW",
                            value: 10
                        }, {
                            tag: "SW",
                            value: 12
                        }
                    ]
                }
            ],
            attributes: [
                {
                    name: "Agility",
                    value: 4
                },
                {
                    name: "Smarts",
                    value: 6
                },
                {
                    name: "Spirit",
                    value: 0
                },
                {
                    name: "Strength",
                    value: 8
                },
                {
                    name: "Vigor",
                    value: 8
                }
            ]
        }

        this.updateAttributes = this.updateAttributes.bind(this);
    }

    updateAttributes = (e) => {
        console.log(e.target.name, e.target.value)
        // console.log(e.target.value);
        this.setState({
            attributes: [
                ...this.state.attributes,
                {
                    name: e.target.name,
                    value: e.target.value
                }
            ]
        });
    }

    render() {
        const { startingAtt } = this.state
        return (
            <div>
                <h2>Attributes</h2>
                <div>
                    {startingAtt.map((item, i) =>
                        <div key={i}>{item.name}
                            <select name={item.name} defaultValue={this.state.attributes[i].value} onChange={this.updateAttributes}>
                                {item.possible.map((item, i) =>
                                    <option key={i} value={item.value}>{item.value}</option>)}
                            </select>
                        </div>)}
                </div>
            </div>
        );
    }
}
