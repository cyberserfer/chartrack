import React from "react";
import List from "./List";
import get from "lodash.get";

export default ({ data, template, updateFunction }) => {
    const getValue = (field) => data.length ? get(
    data.find(el => el.name === field.name),
    "value",
    "")
    : data[field.name.toLowerCase()]

  return (
  <>
    <h2>{template.title}</h2>
    {template.fields.map(field => (
      <List
        key={field.name}
        objName={field.name}
        objValue={data ? getValue(field) : template.defaultValue || 0}
        possibleValues={template.dicePool}
        funcOne={e => updateFunction(e)}
      />
    ))}
  </>
)}
