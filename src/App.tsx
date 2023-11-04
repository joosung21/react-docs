import React from 'react'
import AppRouter from './router/AppRouter'
import './App.scss'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const App = () => {
  return (
    <div className="App">
      <AppRouter />
    </div>
  )
}

export default App
