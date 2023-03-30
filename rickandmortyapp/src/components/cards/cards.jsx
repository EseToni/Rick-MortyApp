import React from "react";
import ExpCard from "./expCard";
import useFetchPrueba from "../../hooks/useFetchPrueba";
import "./card.css"

export default function Cards() {
  const url = "https://rickandmortyapi.com/api/character";
  const { data, loading, error } = useFetchPrueba(url);
  
  if (loading) return <div>Loading...</div>;
  return (
    <div className="container">
      {data.map((info) => (
        <ExpCard key={info.id} {...info} />
      ))}
    </div>
  );
}
