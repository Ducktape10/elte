import { useContext, useEffect, useState } from "react";
import { CounterContext } from "../example/CounterProvider";
import Modal from "../ui/Modal";
import PlaylistItem from "../ui/PlaylistItem";
import Playlists from "../ui/PlayLists";
import SongInfo from "../ui/SongInfo";
import { genres } from "../utils/genres";

const PlaylistView = () => {
  // const { counter, increaseCounter } = useContext(CounterContext);
  const [theGenres, setTheGenres] = useState([]);

  useEffect(() => {
    const theGenres2 = genres.filter(
      (genre) => genre.description >= 3
    );

    setTheGenres(theGenres2);
    // console.log(counter);
  }, [/* counter */]);

  return (
    <div className="ui container">
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


