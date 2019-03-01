import React, { useState } from 'react'
import useData from '../hooks/useData'
import { withStyles } from '@material-ui/core/styles'
import { renderToString } from 'react-dom/server'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { Typography } from '@material-ui/core'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Scatterplot from '../components/Scatterplot'
import Table from '../components/Table'
import createToolTip from '../util/createToolTip'
import Spinner from '../components/Spinner'
import MapChart from '../components/MapChart'
import { scatterplotURL, mapURL, heatmapURL } from '../data/gistURLs'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    float: 'right'
  },
  alignCenter: {
    textAlign: 'center'
  }
})

const Instructor = props => {
  const { classes } = props
  const [course, setCourse] = useState('PHIL 101')
  const scatterplotData = useData(scatterplotURL)
  const mapChartData = useData(mapURL)
  const heatmapData = useData(heatmapURL)

  const mapData = {
    heatmapData,
    mapChartData
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
            <InputLabel>Courses</InputLabel>
            <Select
              value={course}
              onChange={event => setCourse(event.target.value)}
            >
              <MenuItem value={'PHIL 101'}>PHIL 101</MenuItem>
              <MenuItem value={'PHIL 102'}>PHIL 102</MenuItem>
              <MenuItem value={'PHIL 201'}>PHIL 201</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid container>
              <Grid item xs={2}>
                <Typography variant='h5' className={classes.alignCenter}>30</Typography>
                <Typography className={classes.alignCenter}>Students</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant='h5' className={classes.alignCenter}>77.4%</Typography>
                <Typography className={classes.alignCenter}>Average Grade</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant='h5' className={classes.alignCenter}>30</Typography>
                <Typography className={classes.alignCenter}>Students</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant='h5' className={classes.alignCenter}>30</Typography>
                <Typography className={classes.alignCenter}>Students</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant='h5' className={classes.alignCenter}>30</Typography>
                <Typography className={classes.alignCenter}>Students</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant='h5' className={classes.alignCenter}>30</Typography>
                <Typography className={classes.alignCenter}>Students</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant='h5' gutterBottom >Where are your students from?</Typography >
            {mapChartData ? heatmapData ? <MapChart
              data={mapData}
              aspectRatio={0.3}
              tip={createToolTip(d => renderToString(
                <Paper className={classes.paper}>
                  {d.properties.name}
                </Paper>
              ))} /> : <Spinner /> : <Spinner />}
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant='h5' gutterBottom >Grade Correlation</Typography >
            {scatterplotData ? <Scatterplot
              data={scatterplotData}
              aspectRatio={0.3}
              xAxisLabel={'Midterm 1 %'}
              yAxisLabel={'Final Exam %'}
              tip={createToolTip(d => renderToString(
                <Paper className={classes.paper}>
                  <Table className={classes.table} tableData={[
                    ['Student Name', <strong>Justin Lee</strong>],
                    ['Midterm 1 Grade', <strong>{d.x}%</strong>],
                    ['Final Exam', <strong>{d.y}%</strong>],
                    ['Overall Grade', <strong>{(d.y + d.x) / 2}%</strong>]
                  ]} />
                </Paper>
              ))} />
              : <Spinner />}
          </Paper>
        </Grid>
      </Grid >
    </div >
  )
}

export default withStyles(styles)(Instructor)
