import './index.css';
import { Routes, Route } from "react-router-dom";
import Map from './componenets/Map'
import SearchMenu from './componenets/SearchMenu';


function App() {
    return (
        <Routes>
            <Route path="/" element={<SearchMenu />} />
            <Route path="/map" element={<Map />} />
        </Routes>
    )
}

export default App