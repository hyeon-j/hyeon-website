import React from 'react'
import { Route, Routes, Link} from 'react-router-dom'

import './index.css'
import { MdClearAll } from "react-icons/fa";

import Path from './pages/Path';
import Sort from './pages/Sort/Sort'
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar.js'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/path' element={<Path />} />
        <Route path='/sort' element={<Sort />} />
      </Routes>
      
    </>
  );
}

export default App;
