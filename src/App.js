import AllTravelsPage from "./pages/allTravel";
import NewTravelsPage from "./pages/newTravel";
import Favorites from "./pages/favorites";
import Layout from "./components/layout/layout";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AllTravelsPage />
          </Route>
          <Route path="/new-place">
            <NewTravelsPage />
          </Route>
          <Route path="/next-stop">
            <Favorites />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
