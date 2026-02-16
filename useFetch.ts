import { useEffect, useState } from "react";


export default  async function useFetch<T>(fetchFunction: () => Promise<T>, referesh: true) {
    const [data, setData] = useState<T| null>(null)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null)

    try{
        setLoading(true);
        const data = await fetchFunction();
        setData(data)

    }catch(error){
        setError(new Error("Movies don't get fetched"))
    }finally{
        setLoading(false);
    }


    return {data, loading, error};
}