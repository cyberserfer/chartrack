import React from 'react'
import get from 'lodash.get'

const FieldElement = ({ name, element, defaultValue }) => {

  if (element === 'textArea') {
    return <textarea id={name} name={name} defaultValue={defaultValue} />
  }
  return <input id={name} name={name} defaultValue={defaultValue} />
}

export default ({ data, template, updateFunction }) => {
  const getValue = (field) => data.length
    ? get(data.find(el => el.name === field.key), 'value', '')
    : data[field.key]

  return (
    <div>description</div>
  )
}
