const TMBD_CONFIG = {
    BASE_URL: "https://api.themoviedb.org/3",
    API_KEY: process.env.PUBLIC_TMDB_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.PUBLIC_TMDB_API_KEY}`
    }
}

const fetchMovies = async ({query} : {query :String}) => {
    // 'https://api.themoviedb.org/3/keyword/keyword_id/movies?include_adult=false&language=en-US&page=1'
    const url = query? `${TMBD_CONFIG.BASE_URL}/keyword/${query}/movies`
    : `${TMBD_CONFIG.BASE_URL}/${query}`;
    const response = await fetch(url, {
        method: 'GET',
        // headers
        headers: TMBD_CONFIG.headers
    } )

    if (!response.ok) throw new Error("Movies fetching failed")
    
    const data = await response.json(); 
    const movies = data.result; 
}