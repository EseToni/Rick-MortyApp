import React from "react";
import { Routes, Route } from "react-router-dom";
import  App  from "../App";
import Index from "../components/index/index"
import navBar from "../components/navBar/navBar";
export const Rutas = () => {
    return (
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/Login" element={<App />}/>
      </Routes>
    );
  };
  export default Rutas;