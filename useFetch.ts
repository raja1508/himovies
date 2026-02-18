import { useEffect, useState } from "react";


export default function useFetch<T>(fetchFunction: () => Promise<T>, referesh: true) {
    const [data, setData] = useState<T| null>(null)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null)

    async function fetch() {
        try{
            setLoading(true);
            setError(null);
            const data = await fetchFunction();
            setData(data)
            
        }catch(error){
            setError(new Error("Movies don't get fetched"))
        }finally{
            setLoading(false);
        }
    }
        
    const reset = () => {
        setData(null);
        setError(null);
        setLoading(false);
    };

    useEffect(() => {
        if(referesh === true){
            console.log("fetching");
            fetch();
        }
    }, [])


    return {data, loading, error, reset , fetch};
}