import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { fetchMovies } from "../Services/MoviesApi";
import SkeletonFile from "../Elements/SkeletonFile";
import MovieFullDetail from "../Modules/MovieFullDetail";
import MovieDetails from "../Modules/MovieDetails";
import useTheme from "../Hooks/useTheme";


function Hometemplate() {
  let {pathname,search} = useLocation()
  let searchUrl = new URLSearchParams(search)
  let titleQuery = searchUrl.get("title")
  let{theme} = useTheme()
  let {data : movies,isLoading,isError,error} = useQuery({queryKey:["movies"],queryFn:fetchMovies,});
  if (isLoading) {
    return <SkeletonFile />
  }
  if (isError) {
    return <h5 className="text-white mx-auto">{error.message}</h5>
  }
  
   let filtermovie = titleQuery && movies.find((item)=> item.title === titleQuery)
   let simillarMovie = titleQuery && movies.filter((item)=> item.type === filtermovie.type)
  
  return (
    <>
      <div className={`bg-${theme} text-white py-5 px-3 w-100 d-flex flex-wrap row-cols-5 gap-2 justify-content-center align-items-center `}>
      {
        titleQuery? (<MovieFullDetail {...filtermovie} simillar={simillarMovie} />) : (
            movies?.map((movie)=>{
                return(<MovieDetails {...movie} key={movie.id}/>)}))}
    </div>
    </>
  );
}

export default Hometemplate;
