import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import ArtistRoute from "../ArtistRoute";

import { GlobalStyles } from "./GlobalStyles";

const DEFAULT_ARTIST_ID = "6x2LnllRG5uGarZMsD4iO8";



const App = () => {
  React.useEffect(() => {
    fetch("/spotify_access_token")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <Router>
        <Switch>
          <Route path="/artist/:artistId">
            <ArtistRoute />
          </Route>
          <Redirect to={`/artist/${DEFAULT_ARTIST_ID}`} />
        </Switch>
      <GlobalStyles />
    </Router>
  );
};

export default App;
