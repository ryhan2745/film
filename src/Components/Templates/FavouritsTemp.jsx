import useFavourits from "../hooks/useFavourits"
import useMovies from "../Hooks/useMovies"
import MovieDetails from "../Modules/MovieDetails"



const FavouritsTemp = () => {
    let {favourites} = useFavourits()
    let {movies,loading} = useMovies()
    if (loading) {
        return <h3>is Loading ...</h3>
    }
    let favouriteMovies = movies.filter((movie) => favourites.includes(movie.id))
    if (favouriteMovies.length === 0) {
        return <h5>you dont have favourite movie</h5>
    }
    return<>
    <div className="bg-dark row row-cols-5 p-3 gap-3 col-12 mx-auto justify-content-center">
        {
            favouriteMovies.map((movie) => (
                <MovieDetails key={movie.id} {...movie} />
            ))
        }
     </div>
    </>
}
export default FavouritsTemp