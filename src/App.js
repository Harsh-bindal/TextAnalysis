import React from 'react'
import Navbar from "./components/Navbar/Navbar"
import Textbar from "./components/TextBar/Textbar"
import About from './pages/About/About'
import "/app.css"
import { Route,Routes,BrowserRouter as Router } from 'react-router-dom'

export default function App() {
  return (
    
    <Router>
      <Navbar></Navbar>

      <div className="App">
      <Routes>
        <Route  path="/" element={<Textbar></Textbar>} ></Route>
        <Route exact path="/About" element={<About></About>} />
        <Route exact path="/Textbar" element={<Textbar></Textbar>}></Route>
      </Routes>
   </div>

  </Router>


    
    
    
  )
}
