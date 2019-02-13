import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import LineChart from '../components/LineChart'
import BarChart from '../components/BarChart'
import GroupedBarChart from '../components/GroupedBarChart'
import Table from '../components/Table'
import EmojiFeedback from '../components/EmojiFeedback'
import emojiEndpoints from '../constants/emojiEndpoints'
import { barChartURL, groupedBarChartURL, lineChartURL } from '../data/gistURLs'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  feedback: {
    width: '310px',
    height: '350px',
    padding: '12px'
  }
})

const Home = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Typography variant='h2'>Overview Dashboard</Typography>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
            <Grid item container>
              <Grid item xs={12} sm={6} container direction='column' spacing={8}>
                <Grid item>
                  <Typography gutterBottom variant='subtitle2'>Total Logins</Typography>
                </Grid>
                <Grid item>
                  <Typography gutterBottom variant='h6'>423</Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6} container direction='column' spacing={8}>
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
            <Grid item xs={12}>
              <LineChart dataURL={lineChartURL} />
            </Grid>
            <EmojiFeedback id='lineChart' popoverText={'give feedback'} endpoints={emojiEndpoints} style={classes.feedback} />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
            <Grid item container>
              <Grid item xs={12} sm={6} container direction='column' spacing={8}>
                <Grid item>
                  <Typography gutterBottom variant='subtitle2'>Total Logins</Typography>
                </Grid>
                <Grid item>
                  <Typography gutterBottom variant='h6'>423</Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6} container direction='column' spacing={8}>
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
            <Grid item xs={12}>
              <BarChart dataURL={barChartURL} />
            </Grid>
            <EmojiFeedback id='barChart' popoverText={'give feedback'} endpoints={emojiEndpoints} style={classes.feedback} />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
            <Grid item container>
              <Grid item xs={12} sm={6} container direction='column' spacing={8}>
                <Grid item>
                  <Typography gutterBottom variant='subtitle2'>Total Logins</Typography>
                </Grid>
                <Grid item>
                  <Typography gutterBottom variant='h6'>423</Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6} container direction='column' spacing={8}>
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
            <Grid item xs={12}>
              <GroupedBarChart dataURL={groupedBarChartURL} />
            </Grid>
            <EmojiFeedback id='groupedBarChart' popoverText={'give feedback'} endpoints={emojiEndpoints} style={classes.feedback} />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>
            <Grid item container>
              <Grid item xs={12} sm={6} container direction='column' spacing={8}>
                <Grid item>
                  <Typography gutterBottom variant='subtitle2'>Total Logins</Typography>
                </Grid>
                <Grid item>
                  <Typography gutterBottom variant='h6'>423</Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6} container direction='column' spacing={8}>
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
            <Grid item xs={12}>
              <Table tableHead={['ID', 'Name', 'Salary', 'Country']}
                tableData={[
                  ['1', 'Dakota Rice', '$36,738', 'Niger'],
                  ['2', 'Minerva Hooper', '$23,789', 'Curaçao'],
                  ['3', 'Sage Rodriguez', '$56,142', 'Netherlands'],
                  ['4', 'Philip Chaney', '$38,735', 'Korea, South']
                ]} />
            </Grid>
            <EmojiFeedback id='table' popoverText={'give feedback'} endpoints={emojiEndpoints} style={classes.feedback} />
          </Paper>
        </Grid>
      </Grid>
    </div >
  )
}

export default withStyles(styles)(Home)
