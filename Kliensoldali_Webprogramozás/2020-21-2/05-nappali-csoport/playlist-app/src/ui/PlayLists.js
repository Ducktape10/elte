import { playlists } from "../utils/playlists";
import PlaylistItem from "./PlaylistItem";

const Playlists = ({ genre }) => {

  const playlistItems = playlists[genre];

  return (
    <div className="ui ten wide column">
      <h3>{genre}</h3>
      <div className="ui very relaxed selection list">
        {playlistItems.map(
          (playlistItem) => <PlaylistItem header={playlistItem.header} description={playlistItem.description} icon="music" />
        )}
      </div>
    </div>
  );
};

export default Playlists;