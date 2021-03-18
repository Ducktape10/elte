import { playlists } from "../utils/playlists";
import PlaylistItem from "./PlaylistItem";

const Playlists = ({ genre }) => {

  const playlistItems = playlists[genre];

  return (
    <div class="ui ten wide column">
      <h3>{genre}</h3>
      <div class="ui very relaxed selection list">
        {playlistItems.map(
          (playlistItem) => <PlaylistItem header={playlistItem.header} description={playlistItem.description} icon="music" />
        )}
      </div>
    </div>
  );
};

export default Playlists;