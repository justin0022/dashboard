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
import emojiEndpoints from '../constants/emojiEndpoints'

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
            <GroupedBarChart data={groupedBarChartData} tip={tip} aspectRatio={0.25} />
            <EmojiFeedback id='groupedBarChartFeedback' endpoints={emojiEndpoints} options={{ emojis: specialEmojis }} />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography>Sankey Diagram</Typography>
            <Sankey data={sankeyData} />
            <EmojiFeedback id='sankeyFeedback' endpoints={emojiEndpoints} />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography>Bar Chart</Typography>
            <BarChart data={barChartData} tip={tip} />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography>Histogram</Typography >
            <Histogram data={histogramData} tip={createToolTip(d => `<p>${d.length}</p>`)} />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography>Line Chart</Typography>
            <LineChart data={lineChartData} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(Grades)
