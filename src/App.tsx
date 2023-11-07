import React from 'react'
import AppRouter from './router/AppRouter'
import './App.scss'
import { AppSnackbar } from 'features/snackbar/AppSnackbar'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Router>
        <AppRouter />
      </Router>

      <AppSnackbar />
    </div>
  )
}

export default App
