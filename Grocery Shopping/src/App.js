import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Privacypolicy from "./Component/privacypolicy";
import Login from "./Component/login";
import SignUp from "./Component/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacypolicy" element={<Privacypolicy />} />
        <Route path="/Login" element={<Login />} /> 
        <Route path="/SignUp" element={<SignUp />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
