import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const Single = () => {

    const { type, uid } = useParams();

    const [details, setDetails] = useState(null);

    useEffect(() => {

        fetch(`https://www.swapi.tech/api/${type}/${uid}`)
            .then(response => response.json())
            .then(data => {
                setDetails(data.result.properties);
            });

    }, [type, uid]);

    if (!details) {
        return <h2>Loading...</h2>;
    }

    return (
      <div className="container mt-5">
        <div className="row">
            <div className="col-md-6">
              <img
                src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/${type}/${uid}.jpg`}
                alt={details.name}
                className="img-fluid"
              />
            </div>

            <div className="col-md-6">
              <h1>{details.name}</h1>
              <p>
                Character from the Star Wars universe.
              </p>
            </div>

        </div>

        <hr className="my-4" />
        {type === "people" && (
          <div className="row text-center text-danger">

              <div className="col">
                  <h5>Name</h5>
                  <p>{details.name}</p>
              </div>

              <div className="col">
                  <h5>Gender</h5>
                  <p>{details.gender}</p>
              </div>

              <div className="col">
                  <h5>Height</h5>
                  <p>{details.height}</p>
              </div>

              <div className="col">
                  <h5>Mass</h5>
                  <p>{details.mass}</p>
              </div>

              <div className="col">
                  <h5>Hair Color</h5>
                  <p>{details.hair_color}</p>
              </div>

              <div className="col">
                  <h5>Eye Color</h5>
                  <p>{details.eye_color}</p>
              </div>

          </div>
      )}

      {type === "planets" && (
          <div className="row text-center text-danger">

              <div className="col">
                  <h5>Name</h5>
                  <p>{details.name}</p>
              </div>

              <div className="col">
                  <h5>Climate</h5>
                  <p>{details.climate}</p>
              </div>

              <div className="col">
                  <h5>Terrain</h5>
                  <p>{details.terrain}</p>
              </div>

              <div className="col">
                  <h5>Population</h5>
                  <p>{details.population}</p>
              </div>

              <div className="col">
                  <h5>Diameter</h5>
                  <p>{details.diameter}</p>
              </div>

              <div className="col">
                  <h5>Gravity</h5>
                  <p>{details.gravity}</p>
              </div>

          </div>
      )}

      {type === "vehicles" && (
          <div className="row text-center text-danger">

              <div className="col">
                  <h5>Name</h5>
                  <p>{details.name}</p>
              </div>

              <div className="col">
                  <h5>Model</h5>
                  <p>{details.model}</p>
              </div>

              <div className="col">
                  <h5>Manufacturer</h5>
                  <p>{details.manufacturer}</p>
              </div>

              <div className="col">
                  <h5>Vehicle Class</h5>
                  <p>{details.vehicle_class}</p>
              </div>

              <div className="col">
                  <h5>Crew</h5>
                  <p>{details.crew}</p>
              </div>

              <div className="col">
                  <h5>Length</h5>
                  <p>{details.length}</p>
              </div>

          </div>
      )}
      <div className="mt-4">
        <Link to="/" className="btn btn-primary">
          Back Home
        </Link>
      </div>
    </div>
  );
};