export const agregarCard= async (id) => {
  const url = `https://rickandmortyapi.com/api/character/${id}`
  const res = await fetch(url)
  const {data= []} = await res.json()
  const pj = {
    id: data.id,
    name: data.name,
    status: data.status,
    gender: data.gender,
    species: data.species,
    img: data.image,
  }
  return pj
}