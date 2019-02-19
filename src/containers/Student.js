import React from 'react'
import useData from '../hooks/useData'
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
import { average } from '../util/math'
import { barChartURL, groupedBarChartURL, lineChartURL, histogramURL, sankeyURL } from '../data/gistURLs'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary
  },
  chartTitle: {
    textAlign: 'center'
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

  const groupedBarChartData = useData(groupedBarChartURL)
  const sankeyData = useData(sankeyURL)
  const barChartData = useData(barChartURL)
  const lineChartData = useData(lineChartURL)
  const histogramData = useData(histogramURL)

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant='h5' gutterBottom className={classes.chartTitle}>Grade Distribution</Typography >
            {histogramData
              ? <>
                <Typography>Number of Students: <strong>{histogramData.length}</strong> </Typography>
                <Typography>Average Grade: <strong>{average(histogramData)}%</strong> </Typography>
                <Typography>My Grade: <strong>{average(histogramData) + 12}%</strong> </Typography>
                </>
              : null}
            <Histogram
              data={histogramData}
              tip={createToolTip(d => `<p>${d.length}</p>`)}
              aspectRatio={0.3}
              xAxisLabel={'Grade %'}
              yAxisLabel={'Number of Students'} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography>Grouped Bar Chart</Typography>
            <GroupedBarChart data={groupedBarChartData} tip={tip} aspectRatio={0.5} />
            <EmojiFeedback id='groupedBarChartFeedback' popoverText={'give feedback'} endpoints={emojiEndpoints} options={{ emojis: specialEmojis }} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography>Sankey Diagram</Typography>
            <Sankey data={sankeyData} />
            <EmojiFeedback id='sankeyFeedback' popoverText={'give feedback'} endpoints={emojiEndpoints} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.paper}>
            <Typography>Bar Chart</Typography>
            <BarChart data={barChartData} tip={tip} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.paper}>
            <Typography>Line Chart</Typography>
            <LineChart data={lineChartData} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.paper}>
            <Typography>Bar Chart</Typography>
            <BarChart data={barChartData} tip={tip} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(Student)
