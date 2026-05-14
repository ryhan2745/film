import { useEffect } from "react"
import { Link } from "react-router-dom"

const MovieCardSlide = ({id,title,genre,description,year,rating}) => {
return<>
    <Link to={`/movies/${title}`} className="text-decoration-none">
        <div className="mx-auto d-flex flex-column justify-content-center align-items-center border py-2 px-5 rounded bg-dark text-white w-100 m-3" style={{height:"550px"}}>
            <img src={`/public/images/${id}.jfif`} alt={title} className="img-fluid m-3" style={{height:"250px"}} />
            <h5>{title}</h5>
            <h6>genre : {genre}</h6>
            <p>description : {`${description.slice(0,15)} ...`}</p>
        </div>
    </Link>
</>

}
export default MovieCardSlide