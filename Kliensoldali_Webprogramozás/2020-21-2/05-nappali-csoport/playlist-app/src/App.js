import { useState } from "react";
import CounterButton from "./ui/CounterButton";
import IndexView from "./views/IndexView";
import PlaylistView from "./views/PlaylistsView";
import SearchView from "./views/SearchView";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from "./ui/Navbar";
import Layout from "./ui/Layout";
import CounterButtonProvider from "./providers/CounterButtonProvider";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <CounterButtonProvider>
          <Route path='/' exact>
            <IndexView />
          </Route>
          <Route path='/playlists'>
            <PlaylistView />
          </Route>
        </CounterButtonProvider>
        <Route path='/search'>
          <SearchView />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
