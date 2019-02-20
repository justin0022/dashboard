import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import emojiEndpoints from '../../constants/emojiEndpoints'

const createTableCard = (TableComponent, EmojiFeedback) => props => {
  const {
    classes,
    feedbackId,
    tableHead,
    tableData,
    xs = 12,
    sm = 6,
    md = 4
  } = props

  return (
    <Grid item xs={xs} sm={sm} md={md}>
      <Paper className={classes.paper}>
        {props.children}
        <Grid item xs={12}>
          <TableComponent tableHead={tableHead}
            tableData={tableData} />
        </Grid>
        {EmojiFeedback !== undefined
          ? <EmojiFeedback id={feedbackId} popoverText={'give feedback'} endpoints={emojiEndpoints} />
          : null}
      </Paper>
    </Grid>
  )
}

export default createTableCard
