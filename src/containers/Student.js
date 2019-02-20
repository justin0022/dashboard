import React from 'react'
import { renderToString } from 'react-dom/server'
import useData from '../hooks/useData'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Histogram from '../components/Histogram'
import createToolTip from '../util/createToolTip'
import Table from '../components/Table'
import { average } from '../util/math'
import { histogramURL } from '../data/gistURLs'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary
  },
  table: {
    width: '300px'
  }
})

const Student = ({ classes }) => {
  const histogramData = useData(histogramURL)
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant='h5' gutterBottom className={classes.chartTitle}>Grade Distribution</Typography >
            {histogramData
              ? <Grid item xs={12} sm={4} lg={2}>
                <Table className={classes.table} tableData={[
                  ['Number of Students', <strong>{histogramData.length}</strong>],
                  ['Average Grade', <strong>{average(histogramData)}%</strong>],
                  ['My Grade', <strong>{average(histogramData) + 12}%</strong>]
                ]} />
              </Grid>
              : null
            }
            <Histogram
              data={histogramData}
              tip={createToolTip(d => renderToString(
                <Paper className={classes.paper}>
                  <Table className={classes.table} tableData={[
                    ['Number of Students', <strong>{histogramData.length}</strong>],
                    ['Average Grade', <strong>{average(histogramData)}%</strong>],
                    ['My Grade', <strong>{average(histogramData) + 12}%</strong>]
                  ]} />
                </Paper>
              ))}
              aspectRatio={0.3}
              xAxisLabel={'Grade %'}
              yAxisLabel={'Number of Students'} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant='h5' gutterBottom className={classes.chartTitle}>Assignment Planning</Typography >
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(Student)
