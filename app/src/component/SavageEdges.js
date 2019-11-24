import React from 'react'
import { Grid, Button, Tooltip } from '@material-ui/core'


const SavageEdges = ({currentEdges, edgesList}) => (

	< div >
		{console.log('edges inside SavageEdges')}
		{console.log(edgesList)}
		{console.log('currentEdges inside SavageEdges')}
		{console.log(currentEdges)}
		<h2>Edges</h2>


		<Grid container spacing={3}>
		{currentEdges.map((edge) =>
			<Grid item xs={12}>
					{edgesList[edge].name}
					<Tooltip title={`Description: ${edgesList[edge].description}`}>
						<Button>TT</Button>
					</Tooltip>
			</Grid>)}
		</Grid>

	</div >
)
export default SavageEdges
