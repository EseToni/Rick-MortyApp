
import { useEffect, useState } from 'react';

const useFetchPrueba = (url) => {
        const [data,setData] = useState(null);
        const [loading,setLoading] = useState(true);
        const [error, setError] = useState("");
        
        useEffect(()=>{
            fetch(url)
            .then((res) => res.json())
            .then((data)=>{
                setError(data.error)
                setData(data.results)
                setLoading(false)
            })
        },[url]);
        return {data, loading, error}
    }

export default useFetchPrueba;