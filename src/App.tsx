import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';

// Components
import Left from './layout/Left';
import NotFound from './pages/NotFound';
import Todo from './pages/Todo';
import Setting1 from './pages/Setting1';
import Setting2 from './pages/Setting2';
import Setting3 from './pages/Setting3';

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
            <Route path="/setting3" element={<Setting3 />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
