import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { fetchMovies } from "../Services/MoviesApi";
import MovieFullDetail from "./MovieFullDetail";


const MovieCard = ({serchmovie}) => {
    let {key} = useParams()
    let navigate = useNavigate()
    let {data : movies,isLoading,isError,error} = useQuery({queryKey:["movies"],queryFn:fetchMovies,});
    
  if (isLoading) {
    return <h3 className="text-white mx-auto">is Loading ...</h3>
  }
  if (isError || !movies) {
    navigate("Not-Found")
  }
  let movie = movies.find((item)=> item.title === key)
  let simillar = movies.filter((item)=> item.type === movie.type)
 return<>
    {
        movie && (
       <div className="bg-dark p-5">
         <MovieFullDetail {...movie} simillar={simillar}/>
       </div>
    )
}
 </>
}
export default MovieCard