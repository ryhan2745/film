import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react"
import { fetchMovies } from "../Services/MoviesApi";
import SkeletonFile from "../Elements/SkeletonFile";

const useMovies = () => {
    let [movies,setMovies] = useState([])
    let [loading,setLoading] = useState(true)
    const fetchMovies = async() => {
        try{
            let res = await fetch("http://localhost:3005/movies")
            if (res.ok) {
                let data = await res.json()
                setMovies(data)
                setLoading(false)
            }else{
                throw new Error(`${res.status}`) 
            }
        }
        catch(err){
            console.log(err);  
        }
    }
    useEffect(()=>{
        fetchMovies();
    },[])

    return {movies}
    
}
export default useMovies