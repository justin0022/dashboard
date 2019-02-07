import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import BarChart from '../components/visualizations/BarChart'
import barChartData from '../data/barChartData'

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

const Grades = props => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <BarChart id='bar1' data={barChartData} width={1000} height={600} />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <BarChart id='bar2' data={barChartData} width={500} height={300} />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <BarChart id='bar3' data={barChartData} width={500} height={300} />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <BarChart id='bar4' data={barChartData} width={300} height={200} />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <BarChart id='bar5' data={barChartData} width={300} height={200} />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <BarChart id='bar6' data={barChartData} width={300} height={200} />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <BarChart id='bar7' data={barChartData} width={300} height={200} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(Grades)
