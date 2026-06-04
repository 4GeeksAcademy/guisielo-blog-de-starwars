import useGlobalReducer from "../hooks/useGlobalReducer";

const Entities = ({title, data, type}) => {
    const {store, dispatch} = useGlobalReducer();

    return(
        <div className="container mb-5">
            <p2>{title}</p2>
            <div className="d-flex gap-3 overflow-auto pb-3">
                Aquí irán el carrusel de cards.
            </div>
        </div>
    );
};

export default Entities;