import React from 'react'
import { Grid, Button, Tooltip } from '@material-ui/core'
import { edges } from '../data/savageEdges.json'

const SavageEdges = (currentEdges, edges) => (

	< div >
		{console.log('edges')}
		{console.log(edges)}
		<h2>Edges</h2>


		<Grid container spacing={3}>
			<Grid item xs={12}>
				<span>
					<div>{edges.Alertness.name}</div>
					{/* <span>{edges.Alertness.name}</span>
					<Tooltip title={`Description: ${edges.Alertness.description}`}>
						<Button>TT</Button>
					</Tooltip> */}
				</span>
			</Grid>
		</Grid>

	</div >
)
export default SavageEdges
