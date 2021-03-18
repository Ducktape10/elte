import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import IndexView from "./views/IndexView";
import PlaylistView from "./views/PlaylistsView";
import SearchView from "./views/SearchView";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/playlist">
          <PlaylistView />
        </Route>
        <Route path="/search">
          <SearchView />
        </Route>
        <Route path="/" exact>
          <IndexView />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
