import React from 'react'

const List = ({ objName, objValue, possibleValues, funcOne }) => {

	return (
		<div key={objName}>
			<p> Object name: {objName}</p>
			<p> Object value: {objValue}</p>
			<p> Possible Values: {possibleValues}</p>
		</div>
	)


}

export default List
