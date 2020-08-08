import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

export default function AlertDialog({ open, setAlertDialog, onConfirm }) {
  const onClose = () => setAlertDialog({ open: false, id: null })
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>
        Are you sure you want to delete?
      </DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          This is irreversible.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color='primary'>
          Cancel
        </Button>
        <Button onClick={onConfirm} color='primary' autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  )
}
