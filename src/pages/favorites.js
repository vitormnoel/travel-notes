import { useContext } from "react";

import List from "../components/Content/list";
import FavoritesContext from "../store/favorite-context";

function FavoritesPage() {
  const favoritesContext = useContext(FavoritesContext);

  let content;

  if(favoritesContext.totalFavorites === 0) {
    content = <p>You got no plans yet.</p>
  } else {
    content = <List meetups={favoritesContext.favorites} />
  }

  return(
    <section>
        <h1>Next Stop</h1>
        {content}
    </section>
  );
}

export default FavoritesPage;
