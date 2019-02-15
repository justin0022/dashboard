import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary
  }
})

const Instructor = props => {
  const { classes } = props

  return (
    <div className={classes.root}>
      <Grid container spacing={16}>

      </Grid>
    </div>
  )
}

export default withStyles(styles)(Instructor)
