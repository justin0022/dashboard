import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Spinner from '../Spinner'
import emojiEndpoints from '../../constants/emojiEndpoints'
import Typography from '@material-ui/core/Typography'

const createChartCard = (ChartComponent, EmojiFeedback) => props => {
  const {
    classes,
    feedbackId,
    data,
    loaded,
    title,
    xs = 12,
    sm = 6,
    md = 4
  } = props

  return (
    <Grid item xs={xs} sm={sm} md={md}>
      <Paper className={classes.paper}>
        {props.children}
        <Grid item xs={12}>
          <Typography gutterBottom variant='h6'>{title}</Typography>
          {loaded ? <ChartComponent data={data} {...props} /> : <Spinner />}
        </Grid>
        {EmojiFeedback !== undefined && data
          ? <EmojiFeedback id={feedbackId} popoverText={'give feedback'} endpoints={emojiEndpoints} />
          : null
        }
      </Paper>
    </Grid>
  )
}

export default createChartCard
