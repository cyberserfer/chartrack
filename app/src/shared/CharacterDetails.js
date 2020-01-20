import React from 'react'
import get from 'lodash.get'
import styled from 'styled-components'

const Details = styled.div`
  box-sizing: border-box;
  margin: 16px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 16px;
  border: 1px solid ${props => props.theme.colors.lightGray};
  div {
    box-sizing: border-box;
    padding: 8px;
    display: flex;
    flex-direction: column;
    min-width: 350px;
    flex: 1;
    label {
      padding: 8px;
      color: ${props => props.theme.colors.primary};
    }
    input, textarea {
      padding: 8px;
      font-size: 20px;
      border: none;
      &:hover {
        cursor: pointer;
      }
    }
  }
`

const FieldElement = ({ fieldKey, name, element, defaultValue, updateFunction }) => {
  if (element === 'textarea') {
    return (
      <textarea
        id={name}
        name={fieldKey}
        defaultValue={defaultValue}
        onChange={(e) => updateFunction(e, { category: 'details' })}
      />
    )
  }

  return (
    <input
      id={name}
      name={fieldKey}
      defaultValue={defaultValue}
      onChange={(e) => updateFunction(e, { category: 'details' })}
    />
  )
}

export default ({ data, template, updateFunction }) => {
  const getValue = (field) => data.length
    ? get(data.find(el => el.name === field.key), 'value', '')
    : data[field.key]
  return (
    <Details>
      {template.fields.map(field => (
        <div key={JSON.stringify(field)}>
          <label htmlFor={field.name}>{field.name}</label>
          <FieldElement
            fieldKey={field.key}
            name={field.name}
            element={field.element}
            defaultValue={data ? getValue(field) : null}
            updateFunction={updateFunction}
          />
        </div>
      ))}
    </Details>
  )
}