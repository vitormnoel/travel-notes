import Card from "../Card/Card";
import classes from "../styles/item.module.css";

import { useContext } from "react";
import FavoritesContext from "../../store/favorite-context";

function TravelItem(props) {
  const favoritesContext = useContext(FavoritesContext);

  const itemIsFavorite = favoritesContext.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesContext.removeFavorite(props.id);
    } else {
      favoritesContext.addFavorite({
        key: props.key,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }
    
  function Help(){
    console.log(`item: ${props.id}`)
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>📍 {props.title}</h3>
          <address>🗓️ {props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler} onPointerUp={Help}>
            {itemIsFavorite ? "Remove" : "Next Stop"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default TravelItem;
