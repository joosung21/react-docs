import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import Setting1 from './pages/Setting1';
import Setting2 from './pages/Setting2';
import Todo from './pages/Todo';
import Left from './layout/Left';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Left />
        <div className='main'>
          <Routes>
            <Route path="/" element={<Navigate to="/setting1" />} />
            <Route path="/setting1" element={<Setting1 />} />
            <Route path="/setting2" element={<Setting2 />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
