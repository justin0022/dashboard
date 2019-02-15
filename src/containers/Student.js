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
import createToolTip from '../util/createToolTip'
import emojiEndpoints from '../constants/emojiEndpoints'
import { barChartURL, groupedBarChartURL, lineChartURL, histogramURL, sankeyURL } from '../data/gistURLs'

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

const Student = ({ classes }) => {
  const tip = createToolTip(d => `<p>${d.data}</p>`)
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography>Grouped Bar Chart</Typography>
            <GroupedBarChart dataURL={groupedBarChartURL} tip={tip} aspectRatio={0.5} />
            <EmojiFeedback id='groupedBarChartFeedback' popoverText={'give feedback'} endpoints={emojiEndpoints} options={{ emojis: specialEmojis }} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography>Sankey Diagram</Typography>
            <Sankey dataURL={sankeyURL} />
            <EmojiFeedback id='sankeyFeedback' popoverText={'give feedback'} endpoints={emojiEndpoints} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography>Bar Chart</Typography>
            <BarChart dataURL={barChartURL} tip={tip} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.paper}>
            <Typography>Histogram</Typography >
            <Histogram dataURL={histogramURL} tip={createToolTip(d => `<p>${d.length}</p>`)} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.paper}>
            <Typography>Line Chart</Typography>
            <LineChart dataURL={lineChartURL} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.paper}>
            <Typography>Bar Chart</Typography>
            <BarChart dataURL={barChartURL} tip={tip} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(Student)
