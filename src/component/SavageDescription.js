import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

export default class SavageDescription extends Component {

  render() {
    const { updateDescription, description } = this.props

    return (
      <div>
        <h2> Character Description</h2>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <span>Name: </span>
            <input
              onChange={e => updateDescription(e)}
              defaultValue={description.Name}
            />
          </Grid>
          <Grid item xs={1}>
            <span>Race: </span>
            <input
              onChange={e => updateDescription(e)}
              defaultValue={description.Race}
            />
          </Grid>
          <Grid item xs={1}>
            <span></span>
          </Grid>
          <Grid item xs={1}>
            <span>Height: </span>
            <input
              onChange={e => updateDescription(e)}
              defaultValue={description.Height}
            />
          </Grid>
          <Grid item xs={1}>
            <span></span>
          </Grid>
          <Grid item xs={1}>
            <span>Weight: </span>
            <input
              onChange={e => updateDescription(e)}
              defaultValue={description.Weight}
            />
          </Grid>
          <Grid item xs={1}>
            <span></span>
          </Grid>
          <Grid item xs={1}>
            <span>Hair: </span>
            <input
              onChange={e => updateDescription(e)}
              defaultValue={description.Hair}
            />
          </Grid>
          <Grid item xs={1}>
            <span></span>
          </Grid>
          <Grid item xs={1}>
            <span>Eyes: </span>
            <input
              onChange={e => updateDescription(e)}
              defaultValue={description.Eyes}
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}