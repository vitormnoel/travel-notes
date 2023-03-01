import { Link } from "react-router-dom";
import { useContext } from "react";

import classes from '../styles/mainNavigation.module.css';
import FavoritesContext from "../../store/favorite-context";

function MainNavigation() {
    const favoritesContext = useContext(FavoritesContext)

    return <header className={classes.header}>
        <div className={classes.logo}>Travel App</div>

        <nav>
            <ul>
                <li>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/new-place'>
                        Add New Place
                    </Link>
                </li>
                <li>
                    <Link to='/next-stop'>
                        Next Stop
                        <span className={classes.badge}>{favoritesContext.totalFavorites}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;