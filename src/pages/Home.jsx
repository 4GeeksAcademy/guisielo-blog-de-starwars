import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Entities from "../components/Entities.jsx"

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

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