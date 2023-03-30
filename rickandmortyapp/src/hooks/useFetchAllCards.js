import {useState , useEffect} from "react"
import { agregarCard } from "../helper/agregarCard"

export const useFetchAllCards = (id) => {
    const [pj, setPj] = useState([])
    const getPj = async () => {
        const newPj = await agregarCard(id)
        setPj(newPj)
    }
    useEffect(() => {
        getPj()
        
    }, []);
    return pj;
    
}
