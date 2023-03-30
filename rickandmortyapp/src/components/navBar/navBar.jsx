import React from "react";
import "./navBar.css";
import { useState } from "react";
import useFetchSolo from "../../hooks/useFetchSOLO";
import ExpCard from "../cards/expCard";
import useFetchPrueba from "../../hooks/useFetchPrueba";
import Cards from "../cards/cards";
export default function NavBar() {
  const [inputValue, setInputValue] = useState("");
  const [addedCard, setAddedCard] = useState([]);
  const [flag, setFlag] = useState(true)
  function onChange(event) {
    const property = event.target.value;
    property > 826? alert("Hay solo 826 personajes.."):
    setInputValue(property);
  }

  const url = `https://rickandmortyapi.com/api/character/`;
  const { data,} = useFetchSolo(url, inputValue);
  const { datos, loading, error} = useFetchPrueba(url);

  function agregarPJ() {
    setAddedCard([...addedCard,data])
  }
  function limiparPJ(){
    setAddedCard([])
    setFlag(false)
  }

  return (
    <div classname="HOLA">
      <div className="contenedor">
        <input
          name="inputBuscar"
          value={inputValue}
          type="text"
          placeholder="Introduce Id"
          onChange={onChange}
        ></input>
        <button onClick={agregarPJ}>Agregar</button>
        <h3>Home</h3>
        <button onClick={limiparPJ}>Limpiar</button>
      </div>
      <div className="containerCards">
      {flag?<Cards></Cards>:console.log("clean")}
        {addedCard.map((info)=> (
          <ExpCard key={info.id} {...info}/>
        ))}
      </div>
    </div>
  );
}
