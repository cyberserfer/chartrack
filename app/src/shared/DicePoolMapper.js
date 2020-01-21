import React from "react";
import get from 'lodash.get'
import styled from 'styled-components'

const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 16px;
  border: 1px solid ${props => props.theme.colors.lightGray};
  padding: 16px;
  height: auto;
  h2 {
    color: ${props => props.theme.colors.primary};
  }
`

export default ({ data, template: { title, dicePool, fields }, updateFunction }) => {
  const getValue = (field) => {
    if (data) {
      return data.length
        ? get(data.find(obj => obj.name === field.key), 'value', null)
        : data[field.key] || null
    }
    return null
  }

  return (
    <Wrapper>
      <h2>{title}</h2>
      {fields.map(field => (
        <div key={JSON.stringify(field)}>
          <label htmlFor={field.key} style={{ marginRight: '1em' }}>{field.name} {field.baseAttribute ? `(${field.baseAttribute.slice(0, 3)})` : null}</label>
          <select
            name={field.key}
            defaultValue={getValue(field)}
            onChange={e => updateFunction(e)}
          >
            {dicePool.map(value => (
              <option name={field.key} key={value} value={value}>{value > 0 ? `d${value}` : value}</option>
            ))}
          </select>
          <p></p>

        </div>
      ))}
    </Wrapper>
  )
}
