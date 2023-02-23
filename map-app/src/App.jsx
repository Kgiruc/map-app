import { useState } from 'react';
import './index.css';
import { Routes, Route } from "react-router-dom";
import Map from './componenets/Map'
import SearchMenu from './componenets/SearchMenu';
import Test from './componenets/Test';


function App() {
    return (
        <Routes>
            <Route path="/" element={<SearchMenu />} />
            <Route path="/map" element={<Map />} />
            <Route path="/test" element={<Test/>} />
        </Routes>
    )
}

export default App