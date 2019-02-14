import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import GroupedBarChart from '../components/GroupedBarChart'
import { groupedBarChartURL } from '../data/gistURLs'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
})

const Assignments = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography>Grouped Bar Chart</Typography>
            <GroupedBarChart dataURL={groupedBarChartURL} aspectRatio={0.5} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(Assignments)
