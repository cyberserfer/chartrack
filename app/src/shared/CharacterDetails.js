
import React from 'react'
import get from 'lodash.get'

const FieldElement = ({ fieldKey, name, element, defaultValue, updateFunction}) => {
  if (element === 'textarea') {
    return (
      <textarea 
        id={name} 
        name={fieldKey} 
        defaultValue={defaultValue} 
        onChange={(e) => updateFunction('details', e)} 
      />
    )
  }

  return (
    <input 
      id={name} 
      name={fieldKey}
      defaultValue={defaultValue} 
      onChange={(e) => updateFunction('details', e)} 
    />
  )
}

export default ({data, template, updateFunction}) => {
  const getValue = (field) => data.length 
    ? get(data.find(el => el.name === field.key),'value','')
    : data[field.key]
  return (
  <>
    {template.fields.map(field => (
      <>
        <label htmlFor={field.name}>{field.name}</label>
        <FieldElement
          fieldKey={field.key}
          name={field.name}
          element={field.element}
          defaultValue={data ? getValue(field): null}
          updateFunction={updateFunction}
        />
      </>
    ))}
  </>
)}