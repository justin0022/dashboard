import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Popover from '@material-ui/core/Popover'

const styles = theme => ({
  typography: {
    margin: theme.spacing.unit * 2
  }
})

const VizCard = props => {
  const { classes } = props
  const [anchorEl, setAnchorEl] = useState(null)

  const open = Boolean(anchorEl)

  return (
    <div>
      <Button
        aria-owns={open ? 'simple-popper' : undefined}
        aria-haspopup='true'
        variant='contained'
        onClick={event => setAnchorEl(event.currentTarget)}
      >
        Open Popover
      </Button>
      <Popover
        id='simple-popper'
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <Typography className={classes.typography}>The content of the Popover.</Typography>
      </Popover>
    </div>
  )
}

export default withStyles(styles)(VizCard)
