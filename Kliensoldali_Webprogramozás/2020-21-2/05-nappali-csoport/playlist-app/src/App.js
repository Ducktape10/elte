import { useState } from "react";
import CalculatorButton from "./ui/CalculatorButton";
import IndexView from "./views/IndexView";
import PlaylistView from "./views/PlaylistsView";
import SearchView from "./views/SearchView";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <CalculatorButton />
    // <Router>
    //   <Switch>
    //     <Route path='/' exact>
    //       <IndexView />
    //     </Route>
    //     <Route path='/playlists'>
    //       <PlaylistView />
    //     </Route>
    //     <Route path='/search'>
    //       <SearchView />
    //     </Route>
    //   </Switch>
    // </Router>
  );
}

export default App;
