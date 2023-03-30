
import { useEffect, useState } from 'react';

const useFetchSolo = (url,id) => {
        const [data,setData] = useState(null);
        const [loading,setLoading] = useState(true);
        const [error, setError] = useState("");
        
        useEffect(()=>{
            fetch(url + id)
            .then((res) => res.json())
            .then((data)=>{
                setError(data.error)
                setData(data)
                setLoading(false)
            })
        },[url + id]);
        return {data, loading, error}
    }

export default useFetchSolo;