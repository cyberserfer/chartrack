import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Edges } from '../data/customData.json';

const SavageEdges = props => (
      <div>
        <h2> Edges</h2>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <span>{Edges.Alertness.name}</span>
            <p>Type: {Edges.Alertness.type}</p>
            <p>Requirement: {Edges.Alertness.requirement}</p>
            <p>Description: {Edges.Alertness.description}</p>
          </Grid>
        </Grid>
      </div>
    )
    export default SavageEdges;