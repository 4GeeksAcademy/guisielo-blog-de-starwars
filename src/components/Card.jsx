import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

const Card = ({item, type})=> {
    const { store, dispatch } = useGlobalReducer();
    const isFavorite = store.favorites.includes(item.name);
        
    const addFavorite = () => {
        dispatch({
            type: "ADD_FAVORITE",
            payload: item.name
        });
    };

        return (
        <div className="card starwars-card">
           <img
                src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/${type}/${item.uid}.jpg`}
                className="card-img-top"
                alt={item.name}
            />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text text-muted">
                    {type === "people" && "Star Wars character"}
                    {type === "planets" && "Star Wars planet"}
                    {type === "vehicles" && "Star Wars vehicle"}
                </p>
                <div className="d-flex justify-content-between">
                    <Link
                        to={`/${type}/${item.uid}`}
                        className="btn btn-outline-primary"
                    >
                        Learn More!
                    </Link>
                    <button
                        className={
                            isFavorite
                                ? "btn btn-warning"
                                : "btn btn-outline-warning"
                        }
                        onClick={addFavorite}
                    >
                        <i
                            className={
                                isFavorite
                                    ? "fa-solid fa-heart"
                                    : "fa-regular fa-heart"
                            }
                        ></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;