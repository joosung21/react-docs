import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Left from 'layout/Left'
import NotFound from 'pages/NotFound'
import Todo from 'pages/Todo'
import MUI from 'pages/Mui'
import UiSandbox from 'pages/UiSandbox'
import FormControl from 'pages/FormControl'
import CreateReactApp from 'pages/CreateReactApp'
import LintFormat from 'pages/LintFormat'
import ReactRouter from 'pages/ReactRouter'
import Jest from 'pages/Jest'
import Versions from 'pages/Versions'
import Axios from 'pages/Axios'
import Redux from 'pages/Redux'
import Tailwind from 'pages/Tailwind'
import UseState from 'pages/UseState'
import UseEffect from 'pages/UseEffect'
import UseCallback from 'pages/UseCallback'
import UseMemo from 'pages/UseMemo'
import UseRef from 'pages/UseRef'
import UseContext from 'pages/UseContext'
import UseReducer from 'pages/UseReducer'

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
          <Route path="/axios" element={<Axios />} />
          <Route path="/redux" element={<Redux />} />
          <Route path="/jest" element={<Jest />} />
          <Route path="/versions" element={<Versions />} />
          <Route path="/tailwind" element={<Tailwind />} />
          <Route path="/mui" element={<MUI />} />
          <Route path="/ui-sandbox" element={<UiSandbox />} />
          <Route path="/form-control" element={<FormControl />} />
          <Route path="/use-state" element={<UseState />} />
          <Route path="/use-effect" element={<UseEffect />} />
          <Route path="/use-callback" element={<UseCallback />} />
          <Route path="/use-memo" element={<UseMemo />} />
          <Route path="/use-ref" element={<UseRef />} />
          <Route path="/use-context" element={<UseContext />} />
          <Route path="/use-reducer" element={<UseReducer />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter
