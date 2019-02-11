import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import LineChart from '../components/LineChart'
import lineChartData from '../data/lineChartData'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary
  }
})

const Home = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={4}>
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
                  <Typography gutterBottom variant='subtitle2' align='right'>View Report</Typography>
                </Grid>
                <Grid item>
                  <Typography gutterBottom variant='h6' align='right'>82.6%</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <LineChart id='bar50' data={lineChartData} />
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div >
  )
}

export default withStyles(styles)(Home)
