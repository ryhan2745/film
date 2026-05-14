import { CiHeart } from "react-icons/ci"
import { Link } from "react-router-dom"
const MovieDetails = ({id,poster,title,genre,description,rating,year}) => {
    
 return<>
     <Link to={`/movies/${title}`} className=" text-decoration-none align-items-center border p-3 rounded">
        <div className="d-flex flex-column justify-content-center align-items-center text-white ">
            <img src={poster} alt={title} className="img-fluid m-3" style={{height:"250px"}} />
            <h5>{title}</h5>
        </div> 
    </Link>
        
    
 </>

}
export default MovieDetails