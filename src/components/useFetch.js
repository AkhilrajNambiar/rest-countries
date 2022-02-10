import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [ error, setError ] = useState(null);    

    useEffect(() => {
        setIsLoading(true);
        setData(null);
        fetch(url)
            .then(res => {
                console.log(res);
                return res.json()
            })
            .then(data => {
                console.log(data);
                data.sort((a, b) => {
                    return a.name.common > b.name.common ? 1 : -1
                })
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            .catch((err) => {
                console.log(err);
                setError(err.message);
                setIsLoading(false);
            })
    }, [url]);

    return [data, isLoading, error, setData, setIsLoading, setError];
}
 
export default useFetch;