import { useState } from "react";
import { Button, Modal } from "semantic-ui-react";

const NewPlaylistModal = ({ open, setOpen }) => {
  // const [open, setOpen] = useState(false);
  const [playlistName, setPlaylistName] = useState('');

  const createPlaylist = () => {

    // on                 Change =        {setPlaylistName}
    // .addEventListener('change',        setPlaylistName)
    // .addEventListener('change', (e) => setPlaylistName(e))

    console.log(playlistName);

    setOpen(false);
    setPlaylistName('');
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
