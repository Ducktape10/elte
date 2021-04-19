import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CounterButtonContext } from "../providers/CounterButtonProvider";
import { getPlaylistsByGenre } from "../redux/actions/playlistAction";
import Modal from "../ui/Modal";
import NewPlaylistModal from "../ui/NewPlaylistModal";
import PlaylistItem from "../ui/PlaylistItem";
import Playlists from "../ui/PlayLists";
import SongInfo from "../ui/SongInfo";
import { theGenres } from '../utils/genres';

const PlaylistView = () => {

  const [songInfo, genres] = useSelector((state) => [state.songInfo, state.genres]);
  // const genres = useSelector((state) => state.genres);
  const dispatch = useDispatch();

  const { count, increaseCount } = useContext(CounterButtonContext);

  const [isNewPlaylistModalOpen, setIsNewPlaylistModalOpen] = useState(false);
  const [theGenre, setTheGenre] = useState('Classics');
  // const [count, setCount] = useState(0);
  // const [count2, setCount2] = useState(0);

  useEffect(() => {
    // const filteredGenres = theGenres.filter(
    //   (g) => g.description >= 5
    // );

    console.log('count1', count);

    // setGenres(theGenres);

    // return () => {
    //   console.log('disconnected');
    // };

  }, [count]);

  // useEffect(() => {
  //   console.log('count2', count2);
  // }, [count2]);

  return (
    <div className="ui container">
      <button onClick={increaseCount}>{count}</button>
      {/* <button onClick={() => setCount2(count2 + 1)}>{count2}</button> */}
      <h1>My Playlists</h1>
      <div className="ui stackable two column grid">
        <div className="ui six wide column">
          <h3>Playlists</h3>
          <div className="ui very relaxed selection list">
            {genres.map(
              (genre, i) => <h1 onClick={() => setTheGenre(genre)}>{genre}</h1>
            )}
            {/* {genres.map(
              (playlistItem, i) => <PlaylistItem header={playlistItem.header} description={playlistItem.description} key={`playlistitem-${i}`} />
            )} */}
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

      <Playlists genre={theGenre} />

      <div className="ui divider"></div>
      <SongInfo
        song={{
          ...songInfo,
          length: '4:35'
        }}
        image="assets/bonjovi.jpg"
        spotifyLink="https://open.spotify.com/track/0v1XpBHnsbkCn7iJ9Ucr1l"
        chordsLink="https://tabs.ultimate-guitar.com/tab/bon-jovi/its-my-life-chords-951538"
        lyricsLink="https://www.azlyrics.com/lyrics/bonjovi/itsmylife.html"
      />

      <NewPlaylistModal open={isNewPlaylistModalOpen} setOpen={setIsNewPlaylistModalOpen} />

    </div>
  );
};

export default PlaylistView;


