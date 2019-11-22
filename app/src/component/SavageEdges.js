import React from 'react'
import { Grid, Button, Tooltip } from '@material-ui/core'


const SavageEdges = (currentEdges, edgesList) => (

	< div >
		{console.log('edges inside SavageEdges')}
		{console.log(edgesList)}
		{console.log('currentEdges inside SavageEdges')}
		{console.log(currentEdges)}
		<h2>Edges</h2>


		<Grid container spacing={3}>
			<Grid item xs={12}>
				<span>
					<div>{edgesList.Alertness.name}</div>
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
