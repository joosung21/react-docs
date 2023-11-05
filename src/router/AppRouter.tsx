import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Left from '../layout/Left'
import NotFound from '../pages/NotFound'
import Todo from '../pages/Todo'
import MUI from '../pages/Mui'
import UiSandbox from '../pages/UiSandbox'
import CreateReactApp from 'pages/CreateReactApp'
import LintFormat from 'pages/LintFormat'
import ReactRouter from 'pages/ReactRouter'
import Versions from 'pages/Versions'
import Tailwind from 'pages/Tailwind'
import UseState from 'pages/UseState'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Left />

      <div className="main">
        <Routes>
          <Route path="/" element={<Navigate to="/create-react-app" />} />
          <Route path="/create-react-app" element={<CreateReactApp />} />
          <Route path="/lint-format" element={<LintFormat />} />
          <Route path="/react-router" element={<ReactRouter />} />
          <Route path="/versions" element={<Versions />} />
          <Route path="/tailwind" element={<Tailwind />} />
          <Route path="/mui" element={<MUI />} />
          <Route path="/ui-sandbox" element={<UiSandbox />} />
          <Route path="/use-state" element={<UseState />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter
