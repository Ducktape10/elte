import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal } from "semantic-ui-react";
import { addPlaylist, modifyPlaylist } from "../redux/actions/playlistAction";

const NewPlaylistModal = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const [playlistName, setPlaylistName] = useState('');
  const [playlistArtist, setPlaylistArtist] = useState('');
  const [oldHeader, setOldHeader] = useState('');
  const [genre, setGenre] = useState('');

  const modifyPlaylistLocally = () => {

    dispatch(modifyPlaylist({ header: playlistName, description: playlistArtist, genre, oldHeader }));

    setOpen(false);
    setPlaylistName('');
    setPlaylistArtist('');
    setOldHeader('');
  };

  return (
    <Modal
      onClose={() => { setOpen(false); setPlaylistName(''); }}
      onOpen={() => setOpen(true)}
      open={open}
      closeIcon
    >
      <Modal.Header>Modify new Playlist</Modal.Header>
      <div className="image content">
        <div className="description">
          <div className="ui form">
            <div className="field">
              <label>Name</label>
              <input type="text" placeholder="My Playlist oldHeader" onChange={(e) => setOldHeader(e.target.value)} value={oldHeader} />
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
          onClick={modifyPlaylistLocally}
          content="Add"
          labelPosition="right"
          icon="plus"
        />
      </Modal.Actions>
    </Modal>
  );
};

export default NewPlaylistModal;
