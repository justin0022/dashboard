import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Link, withRouter } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  homeButton: {
    textDecoration: 'none',
    color: 'white'
  }
}

const DashboardAppBar = props => {
  const { classes, onMenuBarClick, sideDrawerState } = props

  return (
    <div>
      <AppBar className={classes.root} position='static'>
        <Toolbar>
          <IconButton
            onClick={() => onMenuBarClick(!sideDrawerState)}
            className={classes.menuButton}
            color='inherit'
            aria-label='Menu'>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' color='inherit' className={classes.grow}>
            <Link to='/' className={classes.homeButton}>UBC Learning Analytics</Link>
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withRouter(withStyles(styles)(DashboardAppBar))
