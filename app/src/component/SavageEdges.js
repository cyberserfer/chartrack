import React from "react"
import { Grid, IconButton, Tooltip } from "@material-ui/core"
import VisibilityIcon from "@material-ui/icons/Visibility"

const SavageEdges = ({ currentEdges, edgesList }) => (
  <div>
    <h2>Edges</h2>
    <Grid container spacing={3}>
      {currentEdges.map((edge, i) => (
        <Grid item xs={12} key={i}>
          {edgesList[edge].name}
          <Tooltip title={`Description: ${edgesList[edge].description}`}>
            <IconButton size="small">
              <VisibilityIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      ))}
    </Grid>
  </div>
)
export default SavageEdges
