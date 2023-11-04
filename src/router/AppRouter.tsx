import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Left from '../layout/Left'
import NotFound from '../pages/NotFound'
import Todo from '../pages/Todo'
import Setting1 from '../pages/Setting1'
import Setting2 from '../pages/Setting2'
import Setting3 from '../pages/Setting3'
import Setting4 from '../pages/Setting4'
import Hook1 from '../pages/Hook1'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Left />

      <div className="main">
        <Routes>
          <Route path="/" element={<Navigate to="/setting1" />} />
          <Route path="/setting1" element={<Setting1 />} />
          <Route path="/setting2" element={<Setting2 />} />
          <Route path="/setting3" element={<Setting3 />} />
          <Route path="/setting4" element={<Setting4 />} />
          <Route path="/hook1" element={<Hook1 />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter
