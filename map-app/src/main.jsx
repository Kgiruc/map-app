import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Map from './componenets/Map'
import SearchMenu from './componenets/SearchMenu';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<SearchMenu />}/>
            <Route path="/map" element={<Map/>}/>
        </Routes>
    </BrowserRouter>
);
