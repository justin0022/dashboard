import React, { useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import BarChart from '../components/BarChart'
import GroupedBarChart from '../components/GroupedBarChart'
import Histogram from '../components/Histogram'
import LineChart from '../components/LineChart'
import Sankey from '../components/Sankey'
import barChartData from '../data/barChartData'
import groupedBarChartData from '../data/groupedBarChartData'
import histogramData from '../data/histogramData'
import lineChartData from '../data/lineChartData'
import sankeyData from '../data/sankeyData'
import createToolTip from '../util/createToolTip'
import emojiFeedback from '@justin0022/emoji-feedback'

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

  const app = emojiFeedback()
  const endpoints = {
    emoji: 'http://127.0.0.1:5000/emoji',
    feedback: 'http://127.0.0.1:5000/feedback',
    votes: 'http://127.0.0.1:5000/votes'
  }

  useEffect(() => app.init('feedback', endpoints))
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            Grouped Bar Chart
            <GroupedBarChart id='bar1' data={groupedBarChartData} width={1200} height={600} tip={createToolTip(d => `<p>${d.data}</p>`)} />
            <div id='feedback' />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Bar Chart
            <BarChart id='bar2' data={barChartData} width={700} height={500} />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Histogram
            <Histogram id='bar3' data={histogramData} width={700} height={500} />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Sankey Diagram
            <Sankey id='bar4' data={sankeyData} width={700} height={500} />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Line Chart
            <LineChart id='bar5' data={lineChartData} width={700} height={500} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(Grades)
