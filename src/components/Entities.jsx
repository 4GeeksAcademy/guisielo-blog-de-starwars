import useGlobalReducer from "../hooks/useGlobalReducer";
import Card from "./Card";

const Entities = ({title, data, type}) => {
    const {store, dispatch} = useGlobalReducer();

    return(
        <div className="container mb-5">
            <h2>{title}</h2>
            <div className="d-flex gap-3 overflow-auto pb-3">
                {data.map((item) => (
                    <Card 
                        key={item.uid}
                        item = {item}
                        type = {type}
                    />
                ))}
            </div>
        </div>
    );
};

export default Entities;