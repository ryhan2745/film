export const fetchMovies = async() => {
    let res = await fetch("http://localhost:3005/movies")
    if (res.ok) {
        return res.json();
    }else{
        throw new Error(`${res.status}`)
    }
}
export const fetchMoviesById = async(key) => {
    let res = await fetch(`http://localhost:3005/movies/${key}`)
    if (res.ok) {
        return res.json();
    }else{
        throw new Error(`${res.status}`)
    }
}