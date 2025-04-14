import Restaurant from "./Restaurant.jsx";
import data from '../data/data.js';

function RestaurantsContainer() {
  return (
    <div className="restaurantContainer">

      {data.map((restaurant) => ( <Restaurant restaurant={restaurant} key={restaurant.id}/>))}    
      
    </div>
  );
}

export default RestaurantsContainer;
