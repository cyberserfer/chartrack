import React from 'react'
import Grid from '@material-ui/core/Grid'

const List = ({objName, objValue, possibleValues, funcOne }) => {
	console.log('objName');
	console.log(objName);
		
        return (
			<div key={objName}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                {objName}
              </Grid>
              <Grid item xs={2}>
                <span />
              </Grid>
              <Grid item xs={6}>
			<select
			name={objName}
			onChange={e => funcOne(e)}
			defaultValue={objValue}
		  >
			{possibleValues.map((dieType, i) =>
			  <option
				key={i}
				value={dieType}
			  >
				{dieType}
			  </option>)}
		  </select>
		  </Grid>
            </Grid>
          </div>
		)
	

}

export default List
