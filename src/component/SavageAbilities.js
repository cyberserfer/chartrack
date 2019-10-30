import React, { Component } from 'react';

export default class SavageAbilities extends Component {
    possibleAttributes = [ 0,4,6,8,10,12 ]
    
    render() {
        const { updateAttributes, attributes } = this.props
        const atts = Object.entries(attributes)
        return (
            <div>
                <h2>Attributes</h2>
                <div>
                    {atts.map(att => {
                        const key = att[0]
                        const value = att[1]
                        return (
                            <div key={key}>{key} 
                                <select 
                                    name={key}
                                    onChange={e => updateAttributes(e)}
                                    defaultValue={value}
                                >
                                {this.possibleAttributes.map((item, i) =>
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
