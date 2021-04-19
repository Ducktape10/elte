import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal } from "semantic-ui-react";
import { addPlaylist } from "../redux/actions/playlistAction";

const NewPlaylistModal = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  // const [open, setOpen] = useState(false);
  const [playlistName, setPlaylistName] = useState('');
  const [playlistArtist, setPlaylistArtist] = useState('');
  const [genre, setGenre] = useState('');

  const createPlaylist = () => {

    // on                 Change =        {setPlaylistName}
    // .addEventListener('change',        setPlaylistName)
    // .addEventListener('change', (e) => setPlaylistName(e))

    console.log(playlistName);
    console.log(playlistArtist);

    dispatch(addPlaylist({
      header: playlistName,
      description: playlistArtist,
      genre
    }));

    setOpen(false);
    setPlaylistName('');
    setPlaylistArtist('');
  };

  return (
    <Modal
      onClose={() => { setOpen(false); setPlaylistName(''); }}
      onOpen={() => setOpen(true)}
      open={open}
      closeIcon
    >
      <Modal.Header>Add new Playlist</Modal.Header>
      <div className="image content">
        <div className="description">
          <div className="ui form">
            <div className="field">
              <label>Name</label>
              <input type="text" placeholder="My Playlist" onChange={(e) => setPlaylistName(e.target.value)} value={playlistName} />
              <input type="text" placeholder="My Playlist artist" onChange={(e) => setPlaylistArtist(e.target.value)} value={playlistArtist} />
              <input type="text" placeholder="My Playlist genre" onChange={(e) => setGenre(e.target.value)} value={genre} />
            </div>
          </div>
        </div>
      </div>
      <Modal.Actions>
        <Button
          color="black"
          onClick={() => { setOpen(false); setPlaylistName(''); }}
          content="Cancel"
        />
        <Button
          color="green"
          onClick={createPlaylist}
          content="Add"
          labelPosition="right"
          icon="plus"
        />
      </Modal.Actions>
    </Modal>
  );
};

export default NewPlaylistModal;
