import { useState } from "react";
import { playlists } from "../utils/playlists";
import PlaylistItem from "./PlaylistItem";

const Playlists = ({ genre }) => {

  const playlistItems = playlists[genre];

  const [selectedItem, setSelectedItem] = useState();

  const isSelected = (playlistItem) => {
    return selectedItem?.header === playlistItem?.header && selectedItem?.description === playlistItem?.description;
  };

  return (
    <div className="ui ten wide column">
      <h3>{genre}</h3>
      <div className="ui very relaxed selection list">
        {playlistItems.map(
          (playlistItem) => <PlaylistItem
                              header={playlistItem.header}
                              description={playlistItem.description}
                              isActive={isSelected(playlistItem)}
                              handleClick={() => setSelectedItem(playlistItem)}
                              icon="music"
                            />
        )}
      </div>
    </div>
  );
};

export default Playlists;