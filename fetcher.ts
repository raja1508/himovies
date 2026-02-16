const TMBD_CONFIG = {
    BASE_URL: "",
    API_KEY: process.env.PUBLIC_TMDB_API_KEY,
    headers: {

    }
}

const fetchMovies = async ({query} : {query :String}) => {
    const url = query? `${TMBD_CONFIG.BASE_URL}/discover/movies`
    : `${TMBD_CONFIG.BASE_URL}/${query}`;
    const response = await fetch(url, {
        headers: TMBD_CONFIG.headers
    } )

    if (!response.ok) throw new Error("Movies fetching failed")
    
    const data = await response.json(); 
    const movies = data.result; 
}