import { useEffect, useState } from "react";

export const useFetchPj = () => {
    const [pj, setPj] = useState([]);
    useEffect(() => {
      fetch("https://rickandmortyapi.com/api/character")
        .then((res) => res.json())
        .then((data) => data.results)
        .then((result) => {
          const pjArray = result.map((info) => ({
            id: info.id,
            name: info.name,
            status: info.status,
            gender: info.gender,
            species: info.species,
            img: info.image,
          }));
          setPj(pjArray);
        })
        .catch((error) => console.log(error));
    }, []);
  
    return pj;
  };