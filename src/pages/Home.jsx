import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Entities from "../components/Entities.jsx"

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="container">
			<Entities
				title="People"
				data={[
					{
						uid: "1",
						name: "Luke Skywalker"
					},
					{
						uid: "2",
						name: "C-3PO"
					},
					{
						uid: "3",
						name: "R2-D2"
					}
				]}
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