import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import EmojiFeedback from '../components/EmojiFeedback'
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

const endpoints = {
  emoji: 'http://127.0.0.1:5000/emoji',
  feedback: 'http://127.0.0.1:5000/feedback',
  votes: 'http://127.0.0.1:5000/votes'
}

const specialEmojis = [
  { emojicon: '💀', emotion: 'skull' },
  { emojicon: '👻', emotion: 'boo' },
  { emojicon: '👽', emotion: 'alien' },
  { emojicon: '🤖', emotion: 'robot' },
  { emojicon: '💩', emotion: 'poop' }
]

const Grades = ({ classes }) => {
  const tip = createToolTip(d => `<p>${d.data}</p>`)
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography>Grouped Bar Chart</Typography>
            <GroupedBarChart data={groupedBarChartData} tip={tip} />
            <EmojiFeedback id='groupedBarChartFeedback' endpoints={endpoints} options={{ emojis: specialEmojis }} />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography>Sankey Diagram</Typography>
            <Sankey data={sankeyData} />
            <EmojiFeedback id='sankeyFeedback' endpoints={endpoints} />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography>Bar Chart</Typography>
            <BarChart data={barChartData} tip={tip} />
            <EmojiFeedback id='barChartFeedback' endpoints={endpoints} options={{ emojis: specialEmojis }} />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography>Histogram</Typography >
            <Histogram data={histogramData} tip={createToolTip(d => `<p>${d.length}</p>`)} />
            <EmojiFeedback id='histogramFeedback' endpoints={endpoints} />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography>Line Chart</Typography>
            <LineChart data={lineChartData} />
            <EmojiFeedback id='lineChartFeedback' endpoints={endpoints} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(Grades)
