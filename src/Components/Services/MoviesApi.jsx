export const fetchMovies = async() => {
    let res = await fetch("https://my-json-server.typicode.com/ryhan2745/film/movies")
    if (res.ok) {
        return res.json();
    }else{
        throw new Error(`${res.status}`)
    }
}
export const fetchMoviesById = async(key) => {
    let res = await fetch(`https://my-json-server.typicode.com/ryhan2745/film/movies/${key}`)
    if (res.ok) {
        return res.json();
    }else{
        throw new Error(`${res.status}`)
    }
}