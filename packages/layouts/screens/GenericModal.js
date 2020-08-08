import { modalHelper, removeModal } from '@bpgen/services'
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import Dialog from '@material-ui/core/Dialog'
import IconButton from '@material-ui/core/IconButton'
import Slide from '@material-ui/core/Slide'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import isEmpty from 'lodash/isEmpty'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useModals } from '../hooks/useModals'

const useStyles = makeStyles(theme => ({
  appBar: { position: 'relative' },
  title: {
    padding: 2,
    flex: 1,
  },
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

export default function FullScreenDialog() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { modals } = useModals()
  if (isEmpty(modals)) return null
  const currentModal = modals[modals.length - 1]

  const handleClose = () => dispatch(removeModal())

  return (
    <Container maxWidth='xl'>
      <Dialog
        maxWidth='md'
        open={true}
        fullWidth={true}
        onClose={handleClose}
        TransitionComponent={Transition}
        disableBackdropClick
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleClose}
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
            <Typography variant='h6'>
              {currentModal.type.toUpperCase()}
            </Typography>
          </Toolbar>
        </AppBar>
        {modalHelper.getModalComponent(modals)}
      </Dialog>
    </Container>
  )
}
