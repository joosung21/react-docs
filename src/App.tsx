import React from 'react'
import AppRouter from './router/AppRouter'
import './App.scss'
import { AppSnackbar } from 'features/snackbar/AppSnackbar'

const App = () => {
  return (
    <div className="App">
      <AppRouter />
      <AppSnackbar />
    </div>
  )
}

export default App
