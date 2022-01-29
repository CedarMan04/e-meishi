import React from "react"
import {
  MenuList,
  MenuItem,
  Paper,
  Popper,
  Grow,
  ClickAwayListener,
  Typography,
} from "@material-ui/core"

const LongMenu = ({
  open = false,
  actions = [],
  anchorEl = [],
  handleClose = () => {},
}) => {
  return (
    <Popper
      open={open}
      anchorEl={anchorEl}
      placement="bottom-end"
      transition
      disablePortal
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === 'bottom-end' ? 'right top' : 'right bottom',
          }}
        >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList onClose={handleClose}>
                  {actions.map((action) => (
                    <MenuItem 
                      key={action.title}
                      onClose={handleClose}
                    >
                      <Typography color={action.color}>{action.title}</Typography>
                    </MenuItem>
                  )
                  )}
                </MenuList>
              </ClickAwayListener>
            </Paper>
        </Grow>
      )}
    </Popper>
  )
}

export default LongMenu