import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom"
import login from "../pages/login";

function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Rutas;
