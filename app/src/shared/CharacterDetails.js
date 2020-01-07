import React from 'react'
import Grid from '@material-ui/core/Grid'
import get from 'lodash.get'

const FieldElement = ({name, element, defaultValue}) => {
  
  if (element === 'textArea') {
    return <textarea id={name} name={name} defaultValue={defaultValue} />
  }
  return <input id={name} name={name} defaultValue={defaultValue} />
}

export default ({data, template, updateFunction}) => {
  const getValue = (field) => data.length 
    ? get(data.find(el => el.name === field.key),'value','')
    : data[field.key]

  return (
  <Grid container spacing={3}>
    {template.fields.map(field => (
      <Grid item xs={4} key={JSON.stringify(field)}>
        <label htmlFor={field.name}>{field.name}</label>
        <FieldElement
          name={field.name}
          element={field.element}
          defaultValue={data ? getValue(field): null}
        />
      </Grid>
    ))}
  </Grid>
)}