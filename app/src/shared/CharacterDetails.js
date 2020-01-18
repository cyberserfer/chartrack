
import React from 'react'
import get from 'lodash.get'
import { FragmentsOnCompositeTypesRule } from 'graphql'

const FieldElement = ({ fieldKey, name, element, defaultValue, updateFunction}) => {
  if (element === 'textarea') {
    return (
      <textarea 
        id={name} 
        name={fieldKey} 
        defaultValue={defaultValue} 
        onChange={(e) => updateFunction(e, { category: 'details'})} 
      />
    )
  }

  return (
    <input 
      id={name} 
      name={fieldKey}
      defaultValue={defaultValue} 
      onChange={(e) => updateFunction(e, { category: 'details'})} 
    />
  )
}

export default ({data, template, updateFunction}) => {
  console.log('data', data)
  const getValue = (field) => data.length 
    ? get(data.find(el => el.name === field.key),'value','')
    : data[field.key]
  return (
  <div style={{ margin: '1em'}}>
    {template.fields.map(field => (
      <div style={{ display: 'flex', flexDirection: 'column'}} key={JSON.stringify(field)}>
        <label htmlFor={field.name}>{field.name}</label>
        <FieldElement
          fieldKey={field.key}
          name={field.name}
          element={field.element}
          defaultValue={data ? getValue(field): null}
          updateFunction={updateFunction}
        />
      </div>
    ))}
  </div>
)}