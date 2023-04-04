import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Search from './components/Search'
import NavBar from './components/NavBar'
import Login from './pages/Login'
import Signup from './pages/Signup'


function App() {
  return (
    <div style={{backgroundColor: "#CDCDCD"}}>
    <Router>
      <NavBar/>
  <Routes>  
  <Route path="/" element={<Home/>}/>
  <Route path="/search" element={<Search />} />
  <Route path="/Login" element={<Login />} />
  <Route path="/Signup" element={<Signup />} />
  </Routes>
  </Router>
  </div>
  );
}

export default App;