import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  typography: {
    marginTop: theme.spacing.unit * 2
  },
  avatar: {
    padding: '10px',
    margin: '10px'
  }
})

const AvatarModal = props => {
  const {
    classes,
    user
  } = props

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={4}>
          <Avatar className={classes.avatar}>{`${user.firstName.slice(0, 1)}${user.lastName.slice(0, 1)}`}</Avatar>
        </Grid>
        <Grid item xs={8} direction='column'>
          <Typography className={classes.typography} variant='subtitle2'>{`${user.firstName} ${user.lastName}`}</Typography>
          <Typography variant='subtitle2'>{user.email}</Typography>
        </Grid>
        <Grid item xs={12}>

        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(AvatarModal)
