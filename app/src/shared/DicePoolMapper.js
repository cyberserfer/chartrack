import React from "react";
import get from 'lodash.get'

export default ({ data, template: { title, dicePool, fields}, updateFunction }) => {

  const getValue = (field) =>  data.length 
    ? get(data.find(obj => obj.name === field.key), 'value', null) 
    : data[field.key] || null
  
  return (
  <div style={{ margin: '1em'}}>
    <h2>{title}</h2>
    {fields.map(field => (
      <div key={JSON.stringify(field)}>
        <label htmlFor={field.key} style={{ marginRight: '1em'}}>{field.name} {field.baseAttribute ? `(${field.baseAttribute.slice(0,3)})`: null}</label>
          <select
            name={field.key}
            defaultValue={getValue(field)}
            onChange={e => updateFunction(e) }
          >
            {dicePool.map(value => (
              <option name={field.key} key={value} value={value}>{value > 0 ? `d${value}` : value}</option>
            ))}
          </select>
        <p></p>

    </div>
    ))}
  </div>
)}
