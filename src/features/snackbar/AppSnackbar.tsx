import React from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import Alert, { AlertColor } from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import { closeSnackbar, selectSnackbar } from './appSnackbarSlice'

export interface SnackbarMessage {
  message: string
  key: number
}

export function AppSnackbar() {
  const snackbar = useAppSelector(selectSnackbar)
  const dispatch = useAppDispatch()

  return (
    <Snackbar
      key={snackbar.key}
      open={snackbar.opened}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      autoHideDuration={6000}
      onClose={() => dispatch(closeSnackbar())}
    >
      <Alert
        variant="filled"
        onClose={() => dispatch(closeSnackbar())}
        severity={snackbar.type as AlertColor}
        sx={{ width: '100%' }}
      >
        {snackbar.message}
      </Alert>
    </Snackbar>
  )
}
