import React from "react";
import { Route, Routes, Link } from "react-router-dom";

import "./index.css";
import { MdClearAll } from "react-icons/fa";

import Path from "./pages/Path";
import Sort from "./pages/Sort/Sort";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar.js";
import SimpleNavBar from "./components/SimpleNavbar/SimpleNavbar.js";
import Api from "./pages/Api/Api";

function App() {
    return (
        <>
            <Routes>
                <Route path="/hyeon-website" element={<Navbar />} />
                <Route path="/api/" element={<SimpleNavBar />} />
                <Route path="/sort/" element={<SimpleNavBar />} />
            </Routes>

            <Routes>
                <Route path="/hyeon-website" element={<Home />} />
                <Route path="/api/" element={<Api />} />
                <Route path="/sort/" element={<Sort />} />
            </Routes>
        </>
    );
}

export default App;
