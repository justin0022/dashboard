import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import LineChart from '../components/LineChart'
import createChartCard from '../higherOrderComponents/createChartCard'
import BarChart from '../components/BarChart'
import GroupedBarChart from '../components/GroupedBarChart'
import Table from '../components/Table'
import EmojiFeedback from '../components/EmojiFeedback'
import { barChartURL, groupedBarChartURL, lineChartURL } from '../data/gistURLs'
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

const Home = ({ classes }) => {
  const LineChartCard = createChartCard(LineChart, EmojiFeedback)
  const BarChartCard = createChartCard(BarChart, EmojiFeedback)
  const GroupedBarChartCard = createChartCard(GroupedBarChart, EmojiFeedback)
  const TableCard = createTableCard(Table, EmojiFeedback)

  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Typography variant='h2'>Overview Dashboard</Typography>
        </Grid>
        <LineChartCard dataURL={lineChartURL} feedbackId={'lineChartId'} classes={classes} />
        <BarChartCard dataURL={barChartURL} feedbackId={'barChart'} classes={classes} />
        <GroupedBarChartCard dataURL={groupedBarChartURL} feedbackId={'groupedBarChart'} classes={classes} />
        <TableCard tableHead={['ID', 'Name', 'Salary', 'Country']}
          tableData={[
            ['1', 'Dakota Rice', '$36,738', 'Niger'],
            ['2', 'Minerva Hooper', '$23,789', 'Curaçao'],
            ['3', 'Sage Rodriguez', '$56,142', 'Netherlands'],
            ['4', 'Philip Chaney', '$38,735', 'Korea, South']
          ]}
          classes={classes}
          feedbackId={'table'}
        />
      </Grid>
    </div >
  )
}

export default withStyles(styles)(Home)
