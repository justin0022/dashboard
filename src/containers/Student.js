import React from 'react'
import { renderToString } from 'react-dom/server'
import useData from '../hooks/useData'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Histogram from '../components/Histogram'
import CourseProgress from '../components/CourseProgress'
import createToolTip from '../util/createToolTip'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
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
    marginBottom: '0',
    backgroundColor: 'transparent',
    borderSpacing: '0',
    borderCollapse: 'collapse',
    width: '300px',
    borderBottom: 'none'
  },
  tableHeadCell: {
    color: 'inherit',
    fontSize: '1em'
  },
  tableCell: {
    lineHeight: '1.42857143',
    padding: '12px 8px',
    verticalAlign: 'middle'
  },
  tableResponsive: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
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
              ? <Table className={classes.table}>
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.tableCell + ' ' + classes.tableHeadCell}>
                      <Typography>Number of Students</Typography>
                    </TableCell>
                    <TableCell className={classes.tableCell + ' ' + classes.tableHeadCell}>
                      <Typography><strong>{histogramData.length}</strong></Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.tableCell + ' ' + classes.tableHeadCell}>
                      <Typography>Average Grade</Typography>
                    </TableCell>
                    <TableCell className={classes.tableCell + ' ' + classes.tableHeadCell}>
                      <Typography><strong>{average(histogramData)}%</strong> </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.tableCell + ' ' + classes.tableHeadCell}>
                      <Typography>My Grade</Typography>
                    </TableCell>
                    <TableCell className={classes.tableCell + ' ' + classes.tableHeadCell}>
                      <Typography><strong>{average(histogramData) + 12}%</strong></Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              : null}
            <Histogram
              data={histogramData}
              tip={createToolTip(d => renderToString(
                <Paper className={classes.paper}>
                  <Typography>Number of Students: {d.length}</Typography>
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
