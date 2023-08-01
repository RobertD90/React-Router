import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Blue from './Components/Blue';
import Red from './Components/Red';
import Home from './Components/Home';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to="/">Home</Link>
          <Link to="/Blue">Blue</Link>
          <Link to="/Red">Red</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Blue" element={<Blue />} />
            <Route path="/Red" element={<Red />} />
          </Routes>

        </div>
      </div>
    </>
  )
}

export default App
