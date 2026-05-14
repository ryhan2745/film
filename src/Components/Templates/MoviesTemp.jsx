import { useQuery } from "@tanstack/react-query";
import useLocalStorage from "../Hooks/useLocalStorage";
import useMovies from "../Hooks/useMovies";
import MovieDetails from "../Modules/MovieDetails";
import { fetchMovies } from "../Services/MoviesApi";
import SkeletonFile from "../Elements/SkeletonFile";

const MoviesTemp = () => {
    let {data : movies,isLoading,isError,error} = useQuery({queryKey:["movies"],queryFn:fetchMovies,});
    let [genre,setGenre] = useLocalStorage("selectedGenre","All");
    let [type,setType] = useLocalStorage("selectedtype","All");
    let [rating,setRating] = useLocalStorage("selectedrating" , "All")
    if (isLoading) {
        return <SkeletonFile />
        }
    if (isError) {
        return <h5 className="text-white mx-auto">{error.message}</h5>
         }

    let filteredMovies = movies.filter((movie) => {
    let genreMatch = genre === "All" || movie.genre?.includes(genre);
    let typeMatch = type === "All" || movie.type?.includes(type);
    let ratingMatch = rating === "All" || movie.rating > rating
    return genreMatch && typeMatch && ratingMatch;
});
    return<>
        <div className="mx-auto bg-secondary p-3 d-flex flex-column">
            <h4> find your movie easily : </h4>
            <select className="col-4 p-1 rounded" value={genre} onChange={(e) => setGenre(e.target.value)}>
                <option value="All" >All</option>
                <option value="Action" >Action</option>
                <option value="Drama" >Drama</option>
                <option value="Comedy" >Comedy</option>
            </select>
            <select className="col-4 p-1 rounded" value={type} onChange={(e) => setType(e.target.value)}>
                <option value="All" >All</option>
                <option value="movie" >Movie</option>
                <option value="series" >Series</option>
                <option value="animation" >Animation</option>
            </select>
            <select className="col-4 p-1 rounded" value={rating} onChange={(e) => setRating(e.target.value)}>
                <option value="All" >All</option>
                <option value="9" >9</option>
                <option value="8" >8</option>
                <option value="7" >7</option>
            </select>
            <div className="row row-cols-6 p-3 gap-3 col-12 mx-auto justify-content-center">
                {
                    filteredMovies.map((movie) => (
                        <MovieDetails key={movie.id} {...movie} />
                    ))
                }
            </div>
        </div>
    </>
}
export default MoviesTemp