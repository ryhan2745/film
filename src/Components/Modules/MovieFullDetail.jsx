import { FaHeart } from "react-icons/fa";
import useFavourits from "../hooks/useFavourits";
import SwiperSimillar from "./SwiperSimillar";
import { CiHeart } from "react-icons/ci";

const MovieFullDetail = ({
  id,
  title,
  genre,
  year,
  rating,
  description,
  simillar,
}) => {
  const { favourites, toggleFavourite } = useFavourits();
  return (
    <>
      <div className="bg-dark p-5 w-100 ">
        <div className="mx-auto d-flex flex-column justify-content-center align-items-center border p-2 rounded bg-dark text-white col-3 m-3">
          <img
            src={`/public/images/${id}.jfif`}
            alt={title}
            className="img-fluid m-3"
            style={{ height: "300px" }}
          />
          <h5>{title}</h5>
          <h6>genre : {genre}</h6>
          <p>description : {description}</p>
          <p>rating : {rating}</p>
          <p>year : {year}</p>
          <button
            onClick={() => toggleFavourite(id)}
            className="btn p-3 rounded-4 shadow-lg"
          >
            {favourites.includes(id) ? (
              <FaHeart color="red" size={24} />
            ) : (
              <CiHeart color="white" size={24} />
            )}
          </button>
        </div>
        <SwiperSimillar simillar={simillar} />
      </div>
    </>
  );
};
export default MovieFullDetail;
