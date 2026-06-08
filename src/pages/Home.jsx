import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Entities from "../components/Entities.jsx";

export const Home = () => {

	const {store, dispatch} =useGlobalReducer()

	useEffect(() => {	
		fetch("https://www.swapi.tech/api/people")
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: "SET_PEOPLE",
                    payload: data.results
                });
            });

		fetch("https://www.swapi.tech/api/planets")
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: "SET_PLANETS",
                    payload: data.results
                });
            });

		fetch("https://www.swapi.tech/api/vehicles")
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: "SET_VEHICLES",
                    payload: data.results
                });
            });
	}, []);

  	return (
		<div className="container">
			<Entities
				title="People"
				data={store.people}
				type="people"
			/>
			<Entities
				title="Planets"
				data={store.planets}
				type="planets"
			/>
			<Entities
				title="Vehicles"
				data={store.vehicles}
				type="vehicles"
			/>
		</div>
	);
}; 