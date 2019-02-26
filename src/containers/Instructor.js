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
    minWidth: 120
  }
})

const Instructor = props => {
  const { classes } = props
  const [course, setCourse] = useState('')
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
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid container>
              <Grid item xs={2}>
                <Typography variant='h5'>30</Typography>
                <Typography>Students</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant='h5'>30</Typography>
                <Typography>Students</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant='h5'>30</Typography>
                <Typography>Students</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant='h5'>30</Typography>
                <Typography>Students</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant='h5'>30</Typography>
                <Typography>Students</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant='h5'>30</Typography>
                <Typography>Students</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid >
    </div >
  )
}

export default withStyles(styles)(Instructor)
