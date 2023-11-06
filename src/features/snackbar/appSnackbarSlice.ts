import { AlertColor } from '@mui/material'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'app/store'

export interface SnackbarState {
  opened: boolean
  message: string
  type: AlertColor
  key: number
}

const initialState: SnackbarState = {
  opened: false,
  message: '',
  type: 'success',
  key: new Date().getTime(),
}

interface SnackbarPayload {
  message?: string
  type?: AlertColor
}

export const counterSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    openSnackbar: (state, action: PayloadAction<SnackbarPayload>) => {
      state.opened = true
      state.message = action.payload.message || '기본 메시지'
      state.type = action.payload.type || 'success'
      state.key = new Date().getTime()
    },
    closeSnackbar: (state) => {
      state.opened = false
    },
  },
})

export const { openSnackbar, closeSnackbar } = counterSlice.actions

export const selectSnackbar = (state: RootState) => state.snackbar

export default counterSlice.reducer
