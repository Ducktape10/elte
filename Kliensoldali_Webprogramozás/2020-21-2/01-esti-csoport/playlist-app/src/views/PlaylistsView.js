import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CounterContext } from "../example/CounterProvider";
import { SongContext } from "../providers/SongProvider";
import { createSong } from "../redux/actions/PlaylistsAction";
import NewPlaylistModal from "../ui/NewPlaylistModal";
import PlaylistItem from "../ui/PlaylistItem";
import Playlists from "../ui/PlayLists";
import SongInfo from "../ui/SongInfo";
import { genres } from "../utils/genres";

const PlaylistView = () => {
  // const { counter, increaseCounter } = useContext(CounterContext);
  const dispatch = useDispatch();
  const [theGenres, setTheGenres] = useState([]);
  const [isNewPlaylistModalOpen, setIsNewPlaylistModalOpen] = useState(false);
  // const { currentSong, setCurrentSong } = useContext(SongContext);

  const [song, test] = useSelector((state) => [state.song, state.test]);

  useEffect(() => {
    const theGenres2 = genres.filter(
      (genre) => genre.description >= 3
    );

    setTheGenres(theGenres2);
    // console.log(counter);
  }, [/* counter */]);

  const createNewSong = () => {
    dispatch(createSong('Classics', 'Thunderstruck', 'Custom author'));
  };

  return (
    <div className="ui container">
    <h1>{test.animal}</h1>
    {/* <button onClick={increaseCounter}>+1</button> */}
      <h1>My Playlists</h1>
      <div className="ui stackable two column grid">
        <div className="ui six wide column">
          <h3>Playlists</h3>
          <div className="ui very relaxed selection list">
            {theGenres.map(
              (playlistItem, i) => <PlaylistItem header={playlistItem.header} description={playlistItem.description} icon={playlistItem.icon} key={`playlistItem-${i}`} />
            )}
          </div>
        </div>
      </div>

      <div className="item" id="newPlaylist">
        <i className="large green plus middle aligned icon"></i>
        <div className="content">
          <button className="header" onClick={() => setIsNewPlaylistModalOpen(true)}>New</button>
          <div className="description">Create a new playlist</div>
        </div>
      </div>

      <button onClick={createNewSong}>New song</button>

      <Playlists genre="Classics" />

      <div className="ui divider"></div>
      <SongInfo
        song={song.song}
        image={song.image}
        spotifyLink={song.spotifyLink}
        chordsLink={song.chordsLink}
        lyricsLink={song.lyricsLink}
      />

      <NewPlaylistModal open={isNewPlaylistModalOpen} setOpen={setIsNewPlaylistModalOpen} />

    </div>
  );
};

export default PlaylistView;


