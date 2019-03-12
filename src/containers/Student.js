import React from 'react'
import { renderToString } from 'react-dom/server'
import useFetchAll from '../hooks/useFetchAll'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Histogram from '../components/Histogram'
import Spinner from '../components/Spinner'
import createToolTip from '../util/createToolTip'
import Table from '../components/Table'
import { average } from '../util/math'
import { histogramURL } from '../data/gistURLs'

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 8
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary
  },
  table: {
    width: '300px'
  }
})

function Student (props) {
  const { classes } = props
  const histogramData = useFetchAll(histogramURL)
  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant='h5' gutterBottom >Grade Distribution</Typography >
            {histogramData
              ? <>
                <Grid item xs={12} sm={4} lg={2}>
                  <Table className={classes.table} tableData={[
                    ['Number of Students', <strong>{histogramData.length}</strong>],
                    ['Average Grade', <strong>{average(histogramData)}%</strong>],
                    ['My Grade', <strong>{average(histogramData) + 12}%</strong>]
                  ]} />
                </Grid>
                <Histogram
                  data={histogramData}
                  tip={createToolTip(d => renderToString(
                    <Paper className={classes.paper}>
                      <Table className={classes.table} tableData={[
                        ['Number of Students', <strong>{d.length}</strong>],
                        ['Average Grade', <strong>{average(d)}%</strong>]
                      ]} />
                    </Paper>
                  ))}
                  aspectRatio={0.3}
                  xAxisLabel={'Grade %'}
                  yAxisLabel={'Number of Students'} />
              </> : <Spinner />}
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant='h5' gutterBottom >Assignment Planning</Typography >
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(Student)
