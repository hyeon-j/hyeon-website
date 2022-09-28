import React from 'react'
import {BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom'

import './index.css'
import { MdClearAll } from "react-icons/fa";

import Path from './pages/Path';
import Sort from './pages/Sort'
import Home from './pages/Home'
import Nav from './pages/components/Nav'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sort' element={<Sort />} />
        <Route path='/path' element={<Path />} />
      </Routes>
    </>
  );
}

export default App;
