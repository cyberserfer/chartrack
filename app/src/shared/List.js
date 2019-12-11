import React from 'react'
import Grid from '@material-ui/core/Grid'

const List = ({ objName, objValue, possibleValues, funcOne }) => {
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

          {possibleValues.map((dieType, i) =>
            <button key={i} className={`statdot ${(dieType <= objValue) && ('filled')}`} name={objName} value={dieType} onClick={e => funcOne(e)} />
          )}

        </Grid>
      </Grid>
    </div>
  )
}

export default List
