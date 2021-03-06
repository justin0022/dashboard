import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Link, withRouter } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Badge from '@material-ui/core/Badge'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'
import Popover from '@material-ui/core/Popover'
import AvatarModal from './AvatarModal'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    margin: theme.spacing.unit
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
  },
  roundButton: {
    borderRadius: '50%',
    padding: '12px',
    color: 'white'
  }
})

function DashboardAppBar (props) {
  const { classes, onMenuBarClick, sideDrawerState, user } = props

  // const [notificationEl, setNotificationEl] = useState(null)
  const [avatarEl, setAvatarEl] = useState(null)

  const avatarOpen = Boolean(avatarEl)

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
          <Button>
            <Typography variant='h6' color='inherit' className={classes.grow}>
              <Link to='/' className={classes.homeButton}>UBC Learning Analytics</Link>
            </Typography>
          </Button>
          <div className={classes.grow} />
          <IconButton
            // onClick={event => setNotificationEl(event.currentTarget)}
            color='inherit'>
            <Badge badgeContent={user.numberOfNotifications} color='secondary'>
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            aria-owns={avatarOpen ? 'simple-popper' : undefined}
            onClick={event => setAvatarEl(event.currentTarget)}
            color='inherit'
            aria-haspopup='true'
            variant='contained'>
            <Avatar>{user.firstName.slice(0, 1)}{user.lastName.slice(0, 1)}</Avatar>
          </IconButton>
          <Popover
            open={avatarOpen}
            anchorEl={avatarEl}
            onClose={() => setAvatarEl(null)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}
          >
            <AvatarModal user={user} />
          </Popover>
        </Toolbar>
      </AppBar>
    </div >
  )
}

export default withRouter(withStyles(styles)(DashboardAppBar))
