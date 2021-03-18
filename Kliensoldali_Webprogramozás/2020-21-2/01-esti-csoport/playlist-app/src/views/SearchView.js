import SongTableRow from "../ui/SongTableRow";
import { playlists } from "../utils/playlists";

const SearchView = () => {

  const songs = playlists.Classics;

  return (
    <div className="ui container">
      <div className="ui fluid icon input">
        <input type="text" placeholder="Search for an artist or title..." />
        <i className="search icon"></i>
      </div>
      <div className="ui segment">
        <h2>Results</h2>

        <div className="ui active inverted dimmer">
          <div className="ui large elastic text loader">Loading</div>
        </div>

        <table className="ui celled striped table">
          <thead>
            <tr>
              <th>Artist</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {songs.map(
              (song, i) => <SongTableRow author={song.header} songName={song.description} key={`song-${i}`} />
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchView;