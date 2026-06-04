import useGlobalReducer from "../hooks/useGlobalReducer";

const Card = ({item, type})=> {
   
        return (
        <div className="card" style={{width: "18rem"}}>
            <img src="https://images.pexels.com/photos/2085832/pexels-photo-2085832.jpeg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-outline-primary">Learn more!</a>
            </div>
        </div>
    );
};

export default Card;