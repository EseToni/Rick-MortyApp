import {ADD_FAV, REMOVE_FAV} from "./actionsType"



const initialState = {
    myFavorites: [],
}

export default function reducer(state = initialState, {type , payload}){
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [payload]
            }
        case REMOVE_FAV:
            return {
                ...state,
                
            }
        default:
            return state
    }
    
}