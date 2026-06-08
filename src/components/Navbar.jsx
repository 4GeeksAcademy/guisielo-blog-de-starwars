import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

    const { store, dispatch } = useGlobalReducer();

    const removeFavorite = (favorite) => {
        dispatch({
            type: "REMOVE_FAVORITE",
            payload: favorite
        });
    };

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <Link to="/" className="text-decoration-none">
                    <span className="navbar-brand mb-0 h1">
                        Star Wars Blog
                    </span>
                </Link>
                <div className="dropdown">
                    <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                    >
                        Favorites ({store.favorites.length})
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        {store.favorites.length === 0 ? (
                            <li>
                                <span className="dropdown-item text-muted">
                                    No favorites yet
                                </span>
                            </li>
                        ) : (
                            store.favorites.map((favorite, index) => (
                                <li
                                    key={index}
                                    className="d-flex justify-content-between align-items-center px-3"
                                >
                                    <span>{favorite}</span>
                                    <button
                                        className="btn btn-sm"
                                        onClick={() => removeFavorite(favorite)}
                                    >
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </li>
                            ))
                        )}

                    </ul>

                </div>

            </div>
        </nav>
    );
};