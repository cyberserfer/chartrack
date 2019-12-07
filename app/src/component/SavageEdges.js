import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Edges } from '../data/customData.json';

const SavageEdges = () => (
  <div>
    <h2> Edges</h2>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <span>
			{Edges.Alertness.name}
			<Tooltip title={`Description: ${Edges.Alertness.description}`}>
				<Button>TT</Button>
			</Tooltip>
		
		</span>
      </Grid>
    </Grid>
  </div>
)
export default SavageEdges
