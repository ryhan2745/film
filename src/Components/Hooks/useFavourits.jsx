import useLocalStorage from "./useLocalStorage";

const useFavourits = () => {
    let [favourites, setFavourites] = useLocalStorage("favourites", []);  // ✅ درست شد

    let toggleFavourite = (movieId) => {
        if (favourites.includes(movieId)) {
            let newFavourites = favourites.filter((id) => id !== movieId);
            setFavourites(newFavourites);
        } else {
            setFavourites([...favourites, movieId]);
        }
    };

    return { favourites, setFavourites, toggleFavourite };
};

export default useFavourits;