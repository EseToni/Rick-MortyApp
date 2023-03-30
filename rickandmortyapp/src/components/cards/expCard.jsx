import React from "react";
import "./expCard.css";
import { useState } from "react";
export default function ExpCard({ name, id, status, gender, species, image }) {
  
  const [flag, setFlag] = useState(true)
  function deleteCard(){
    setFlag(false)
  }
  return (
    flag?
    <div className="containerCard">
      <button className="buttonCard" onClick={deleteCard}>X</button>
      <h1 className="nameCard">{name}</h1>
      <h3>{gender}</h3>
      <h3>{species}</h3>
      <img src={image} alt="" className="imageCard"/>
    </div>
    : console.log("eliminado")
  );
}
