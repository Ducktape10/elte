import { useContext, useEffect, useState } from "react";
import { CounterButtonContext } from "../providers/CounterButtonProvider";
import Modal from "../ui/Modal";
import PlaylistItem from "../ui/PlaylistItem";
import Playlists from "../ui/PlayLists";
import SongInfo from "../ui/SongInfo";
import { theGenres } from '../utils/genres';

const PlaylistView = () => {

  const { count, increaseCount } = useContext(CounterButtonContext);

  const [genres, setGenres] = useState([]);
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
              (playlistItem, i) => <PlaylistItem header={playlistItem.header} description={playlistItem.description} key={`playlistitem-${i}`} />
            )}
          </div>
        </div>
      </div>

      <div className="item" id="newPlaylist">
        <i className="large green plus middle aligned icon"></i>
        <div className="content">
          <a className="header" href="TMP">New</a>
          <div className="description">Create a new playlist</div>
        </div>
      </div>

      <Playlists genre="Classics" />

      <div className="ui divider"></div>
      <SongInfo
        song={{
          name: 'It\'s my life',
          author: 'Bon Jovi',
          length: '4:35'
        }}
        image="assets/bonjovi.jpg"
        spotifyLink="https://open.spotify.com/track/0v1XpBHnsbkCn7iJ9Ucr1l"
        chordsLink="https://tabs.ultimate-guitar.com/tab/bon-jovi/its-my-life-chords-951538"
        lyricsLink="https://www.azlyrics.com/lyrics/bonjovi/itsmylife.html"
      />

      <Modal />

    </div>
  );
};

export default PlaylistView;


