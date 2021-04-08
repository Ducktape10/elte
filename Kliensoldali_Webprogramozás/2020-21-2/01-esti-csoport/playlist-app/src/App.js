import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CounterButton from "./example/CounterButton";
import CounterProvider from "./example/CounterProvider";
import Layout from "./example/Layout";
import SimpleButton from "./example/SimpleButton";
import SongProvider from "./providers/SongProvider";
import Navbar from "./ui/Navbar";
import IndexView from "./views/IndexView";
import PlaylistView from "./views/PlaylistsView";
import SearchView from "./views/SearchView";

function App() {
  return (
    // <CounterProvider>
    //   <CounterButton />
    // </CounterProvider>
    <Router>
      <Navbar />
      <Switch>
        <SongProvider>
          <Route path="/playlists">
            <PlaylistView />
          </Route>
          <Route path="/search">
            <SearchView />
          </Route>
          <Route path="/" exact>
            <IndexView />
          </Route>
        </SongProvider>
      </Switch>
    </Router>
  );
}

export default App;
