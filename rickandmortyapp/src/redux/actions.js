import { ADD_FAV, REMOVE_FAV  } from "./actionsType"



function addFav (payload){
    return {
        type: ADD_FAV,
        payload: payload //recibe personaje
    }
}
 function removeFav (payload){
    return{
        type: REMOVE_FAV,
        payload: payload //recibe id
    }
}
export {addFav, removeFav}