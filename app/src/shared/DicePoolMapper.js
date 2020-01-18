import React from "react";
import List from "./List";
import get from "lodash.get";

export default ({ data, template, updateFunction }) => {
  const { category, title, defaultValue, dicePool, fields} = template
    const getValue = (field) => data.length ? get(
    data.find(el => el.name === field.name),
    "value",
    "")
    : data[field.name.toLowerCase()]

  return (
  <div style={{ margin: '1em'}}>
    <h2>{title}</h2>
    {fields.map(field => (
      <div key={JSON.stringify(field)}>
        <label htmlFor={field.key} style={{ marginRight: '1em'}}>{field.name}</label>
          <select
            name={field.key}
            defaultValue={defaultValue}
            onChange={e => {
              console.log(e.target)
              updateFunction(e, { field, category })
            }}
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
