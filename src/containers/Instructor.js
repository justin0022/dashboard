import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { Typography } from '@material-ui/core'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'

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
      </Grid >
    </div >
  )
}

export default withStyles(styles)(Instructor)
