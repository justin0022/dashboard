import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import SideDrawer from './SideDrawer'

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
            Learning Analytics
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
      <SideDrawer left={sideDrawerState} />
    </div>
  )
}

export default withStyles(styles)(DashboardAppBar)
