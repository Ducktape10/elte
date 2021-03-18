import SongTableRow from "../ui/SongTableRow";
import { playlists } from "../utils/playlists";

const SearchView = () => {

  const songs = playlists.Classics;

  return (
    <div className="ui container">
      <div class="ui fluid icon input">
        <input type="text" placeholder="Search for an artist or title..." />
        <i class="search icon"></i>
      </div>
      <div className="ui segment">
        <h2>Results</h2>

        <div class="ui active inverted dimmer">
          <div class="ui large elastic text loader">Loading</div>
        </div>

        <table class="ui celled striped table">
          <thead>
            <tr>
              <th>Artist</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {songs.map(
              (song) => <SongTableRow author={song.header} songName={song.description} />
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchView;