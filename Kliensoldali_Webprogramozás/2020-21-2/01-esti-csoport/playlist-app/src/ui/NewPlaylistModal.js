import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal } from "semantic-ui-react";
import { modifySong } from "../redux/actions/PlaylistsAction";

const NewPlaylistModal = ({ open, setOpen }) => {
  // const [open, setOpen] = useState(false);
  const [genre, setGenre] = useState('');
  const [oldName, setOldName] = useState('');
  const [newName, setNewName] = useState('');

  const dispatch = useDispatch();

  const modifySongLocally = () => {

    // on                 Change =        {setPlaylistName}
    // .addEventListener('change',        setPlaylistName)
    // .addEventListener('change', (e) => setPlaylistName(e))

    // console.log(playlistName);

    dispatch(modifySong(genre, oldName, newName));

    setOpen(false);
    setGenre('');
    setOldName('');
    setNewName('');
  };

  return (
    <Modal
      onClose={() => { setOpen(false); setGenre(''); setOldName(''); setNewName(''); }}
      onOpen={() => setOpen(true)}
      open={open}
      closeIcon
    >
      <Modal.Header>Modify song</Modal.Header>
      <div className="image content">
        <div className="description">
          <div className="ui form">
            <div className="field">
              <label>Genre</label>
              <input type="text" placeholder="Genre" onChange={(e) => setGenre(e.target.value)} value={genre} />
              <label>Old name</label>
              <input type="text" placeholder="Old name" onChange={(e) => setOldName(e.target.value)} value={oldName} />
              <label>New name</label>
              <input type="text" placeholder="New name" onChange={(e) => setNewName(e.target.value)} value={newName} />
            </div>
          </div>
        </div>
      </div>
      <Modal.Actions>
        <Button
          color="black"
          onClick={() => { setOpen(false); setGenre(''); setOldName(''); setNewName(''); }}
          content="Cancel"
        />
        <Button
          color="green"
          onClick={modifySongLocally}
          content="Add"
          labelPosition="right"
          icon="plus"
        />
      </Modal.Actions>
    </Modal>
  );
};

export default NewPlaylistModal;
