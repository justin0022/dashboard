import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import createChartCard from '../higherOrderComponents/createChartCard'
import { lineChartURL } from '../data/gistURLs'
import LineChart from '../components/LineChart'
// import Typography from '@material-ui/core/Typography'

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

  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
        <LineChartCard dataURL={lineChartURL} feedbackId={'lineChartId'} classes={classes} />
      </Grid>
    </div>
  )
}

export default withStyles(styles)(Instructor)
