export const initialStore=()=>({
  people: [],
  planets: [],
  vehicles: [],
  favorites: []
});

function storeReducer(store, action = {}) {
     switch (action.type){
      case "SET_PEOPLE":
        return {
            ...store,
            people: action.payload
        };
      
      case "SET_PLANETS":
        return {
            ...store,
            planets: action.payload
        };

      case "SET_VEHICLES":
        return {
            ...store,
            vehicles: action.payload
        };

      case "ADD_FAVORITE":
        return {
            ...store,
            favorites: [...store.favorites, action.payload]
        };
        
      case "REMOVE_FAVORITE":
          return {
              ...store,
              favorites: store.favorites.filter(
                  favorite => favorite !== action.payload
              )
          };
      default:
        return store;
    }
}

export default storeReducer;
