import React from 'react';
import logo from './logo.svg';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Main from './routes/main';
import Home from './routes/home';

function App() {
  return (
    <>
          <Routes>
            <Route path="/" element={<Main></Main>}  >
              <Route path="" element={<Home></Home>} />
            </Route>
          </Routes >
    </>
  );
}

export default App;
