import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import emojiEndpoints from '../constants/emojiEndpoints'

const createChartCard = (ChartComponent, EmojiFeedback) => props => {
  const {
    classes,
    feedbackId,
    dataURL
  } = props

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper className={classes.paper}>
        <Grid item container>
          <Grid item xs={6} container direction='column' spacing={8}>
            <Grid item>
              <Typography gutterBottom variant='subtitle2'>Total Logins</Typography>
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
        <Grid item xs={12}>
          <ChartComponent dataURL={dataURL} />
        </Grid>
        {EmojiFeedback !== undefined ? <EmojiFeedback id={feedbackId} popoverText={'give feedback'} endpoints={emojiEndpoints} /> : null}
      </Paper>
    </Grid>
  )
}

export default createChartCard
