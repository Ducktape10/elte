import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSongInfo } from "../redux/actions/songInfoAction";
import PlaylistItem from "./PlaylistItem";

const Playlists = ({ genre, setIsEditPlaylistModalOpen }) => {

  const playlists = useSelector((state) => state.playlists);
  const dispatch = useDispatch();

  const playlistItems = playlists[genre];

  const [selectedItem, setSelectedItem] = useState();

  const isSelected = (playlistItem) => {
    // const tmp = fun() || 'asd'; // false -> 'asd'
    // const tmp = fun() ?? 'asd'; // false -> false
    // // const tmp = fun() ? fun() : 'asd';

    return selectedItem?.header === playlistItem?.header && selectedItem?.description === playlistItem?.description;
  };

  const selectSong = (playlistItem) => {
    dispatch(changeSongInfo({
      name: playlistItem.header,
      author: playlistItem.description
    }));

    setSelectedItem(playlistItem);
  };

  return (
    <div className="ui ten wide column">
      <h3>{genre}</h3>
      <div className="ui very relaxed selection list">
        {playlistItems?.map(
          (playlistItem) => <PlaylistItem
                              header={playlistItem.header}
                              description={playlistItem.description}
                              isActive={isSelected(playlistItem)}
                              handleClick={() => selectSong(playlistItem)}
                              setIsEditPlaylistModalOpen={setIsEditPlaylistModalOpen}
                              icon="music"
                            />
        )}
      </div>
    </div>
  );
};

export default Playlists;