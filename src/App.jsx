import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./components/Search";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Error404 from "./pages/Error404";
import Cart from "./pages/Cart";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
