import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/home/index';
import Detail from './Pages/detail/index';
import PersonageProvider from './commons/context'

function App() {
  return (
    <PersonageProvider>
      <Routes>
        <Route path="/detail/:idPersonage" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </PersonageProvider>
  );
}

export default App;
