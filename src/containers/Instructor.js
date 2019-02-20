import React from 'react'
import useData from '../hooks/useData'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import createChartCard from '../components/hoc/createChartCard'
import LineChart from '../components/LineChart'
import { lineChartURL } from '../data/gistURLs'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary
  }
})

const LineChartCard = createChartCard(LineChart)

const Instructor = props => {
  const { classes } = props
  const lineChartData = useData(lineChartURL)

  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
        <LineChartCard data={lineChartData} classes={classes} />
      </Grid>
    </div>
  )
}

export default withStyles(styles)(Instructor)
