import React from 'react'
import useData from '../hooks/useData'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import LineChart from '../components/LineChart'
import Link from '@material-ui/core/Link'
import MapChart from '../components/MapChart'
import createChartCard from '../higherOrderComponents/createChartCard'
import BarChart from '../components/BarChart'
import GroupedBarChart from '../components/GroupedBarChart'
import Table from '../components/Table'
import EmojiFeedback from '../components/EmojiFeedback'
import { barChartURL, groupedBarChartURL, lineChartURL, mapURL } from '../data/gistURLs'
import createTableCard from '../higherOrderComponents/createTableCard'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary
  },
  feedback: {
    width: '310px',
    height: '350px',
    padding: '12px'
  }
})

const LineChartCard = createChartCard(LineChart, EmojiFeedback)
const BarChartCard = createChartCard(BarChart, EmojiFeedback)
const GroupedBarChartCard = createChartCard(GroupedBarChart, EmojiFeedback)
const TableCard = createTableCard(Table, EmojiFeedback)
const MapChartCard = createChartCard(MapChart)

const Home = props => {
  const { classes } = props

  const lineChartData = useData(lineChartURL)
  const groupedBarChartData = useData(groupedBarChartURL)
  const barChartData = useData(barChartURL)
  const mapChartData = useData(mapURL)

  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
        <LineChartCard data={lineChartData} feedbackId={'lineChartId'} classes={classes} >
          <Grid item container>
            <Grid item xs={12} container direction='column' spacing={8}>
              <Grid item>
                <Typography gutterBottom variant='h6'>Active Users</Typography>
              </Grid>
            </Grid>
          </Grid>
        </LineChartCard>
        <BarChartCard data={barChartData} feedbackId={'barChart'} classes={classes} />
        <GroupedBarChartCard data={groupedBarChartData} feedbackId={'groupedBarChart'} classes={classes} />
        <TableCard tableHead={['ID', 'Name', 'Salary', 'Country']}
          tableData={[
            ['1', 'Dakota Rice', '$36,738', 'Niger'],
            ['2', 'Minerva Hooper', '$23,789', 'Curaçao'],
            ['3', 'Sage Rodriguez', '$56,142', 'Netherlands'],
            ['4', 'Philip Chaney', '$38,735', 'Korea, South']
          ]}
          classes={classes}
          feedbackId={'table'}>
          <Grid item container>
            <Grid item xs={6} container direction='column' spacing={8}>
              <Grid item>
                <Typography gutterBottom variant='subtitle2'>Table</Typography>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant='h6'>423</Typography>
              </Grid>
            </Grid>
            <Grid item xs={6} container direction='column' spacing={8}>
              <Grid item>
                <Typography gutterBottom variant='subtitle2' align='right'>
                  <Link>View Report</Link>
                </Typography>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant='h6' align='right'>82.6%</Typography>
              </Grid>
            </Grid>
          </Grid>
        </TableCard>
        <MapChartCard data={mapChartData} classes={classes} xs={12} />
      </Grid>
    </div >
  )
}

export default withStyles(styles)(Home)
