import React, { useState, useEffect } from "react";
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const listQuery = dataKey => gql`
  query {
    ${dataKey} {
      _id
      name
    }
  }
`

const ListSelect = ({addFn, data, dataKey}) => {
  const [selected, setSelected] = useState()
  const selectedObject = data[dataKey].find(el => el.name === selected) || data[dataKey][0]
  return (
    <>
    <select 
      name={dataKey} 
      value={selected} 
      onChange={e => setSelected(e.target.value)}
    >
      {data[dataKey].map((obj,i) => (
          <option name={obj.name} key={JSON.stringify(obj)}>
              {obj.name}
          </option>
      ))}
  </select>
  <button onClick={(e) => addFn(e, selectedObject)}>
    Add
  </button>
  </>
  )
}

export default ({ existingData, dataKey, title, updateFunction }) => {
  const [list, setList] = useState(existingData || [])
  const { data, loading, error } = useQuery(listQuery(dataKey))

  // Update state any time the list changes
  useEffect(() => updateFunction(list, dataKey), [list])
  
  const addFn = (e, obj) => {
    e.persist()
    // There can be duplicate items (as in Gear), but remove duplicates from any other array (via casting to Set)
    const newList = (dataKey === 'items') ? [...list, obj] : Array.from(new Set([...list, obj]))
    setList(newList)
  }

  const removeFn = (obj) => setList(list.filter(el => el !== obj))

  if (loading) {
      return <span>Loading...</span>
  }
  if (error) {
      return <span>FUCK THERE WAS AN ERROR!!!</span>
  }

  return (
  <div>
    <div style={{ margin: '1em'}}>
      <h2>{title}</h2>
      <ListSelect addFn={addFn} data={data} dataKey={dataKey} />
    </div>
    <div>
      {list.length ? list.map((obj, i) => (
        <div key={JSON.stringify(obj)+i} style={{ display: 'flex', justifyContent: 'space-between'}}>
          <span>{obj.name}</span>
          <button onClick={() => removeFn(obj)}>Remove</button>
        </div>
      )) : null}
    </div>
  </div>
  )
}

