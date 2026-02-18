const TMBD_CONFIG = {
    BASE_URL: "https://api.themoviedb.org/3",
    API_KEY: process.env.PUBLIC_TMDB_API_KEY!,
    headers: {
        Accept: 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODAwOTFmM2UwNmM5YTFhZjIyMmJkMzIxZjAzMjVhNSIsIm5iZiI6MTc3MTI0OTk3OC4wNDgsInN1YiI6IjY5OTMyMTNhMmExYWY4YzZkZTk1OTcwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A407A_4zaUyDE4YQbnPUxPifpdjq8AainLpgta5iuH8`
    }
}

export const fetchMovies = async ({query} : {query :String}) => {
    // 'https://api.themoviedb.org/3/keyword/keyword_id/movies?include_adult=false&language=en-US&page=1'
    const url = query? `${TMBD_CONFIG.BASE_URL}/search/movie?query=${query}`
    : `${TMBD_CONFIG.BASE_URL}/discover/movie?language=en-US&page=1&sort_by=popularity.desc`;
    const response = await fetch(url, {
        method: 'GET',
        headers: TMBD_CONFIG.headers
    } )

    if (!response.ok) throw new Error("Movies fetching failed")
    const data = await response.json(); 

    const movies = data.results;
    // console.log(movies)
    return movies;  
}