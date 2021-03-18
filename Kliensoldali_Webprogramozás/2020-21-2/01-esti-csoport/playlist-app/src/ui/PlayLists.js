import { useState } from "react";
import { playlists } from "../utils/playlists";
import PlaylistItem from "./PlaylistItem";

const Playlists = ({ genre }) => {

  const playlistItems = playlists[genre];
  const [activeSong, setActiveSong] = useState();

  const isActiveSong = (song1, song2) => {
    return song1?.header === song2?.header && song1?.description === song2?.description;
  };

  return (
    <div className="ui ten wide column">
      <h3>{genre}</h3>
      <div className="ui very relaxed selection list">
        {playlistItems.map(
          (playlistItem, i) => <PlaylistItem
                                  header={playlistItem.header}
                                  description={playlistItem.description}
                                  icon="music"
                                  handleClick={() => setActiveSong(playlistItem)}
                                  isActive={isActiveSong(activeSong, playlistItem)}
                                  key={`playlistsItem-${i}`}
                                />
        )}
      </div>
    </div>
  );
};

export default Playlists;