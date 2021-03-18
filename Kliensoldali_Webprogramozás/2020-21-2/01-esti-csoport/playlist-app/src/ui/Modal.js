const Modal = () => {
  return (
    <div class="ui modal">
      <i class="close icon"></i>
      <div class="header">Add new Playlist</div>
      <div class="image content">
        <div class="description">
          <div class="ui form">
          {/* itt lehetne akár a Field komponens is ¯\_(ツ)_/¯  */}
            <div class="field">
              <label>Name</label>
              <input required type="text" placeholder="My Playlist" />
            </div>
          </div>
        </div>
      </div>
      <div class="actions">
        <div class="ui black deny button">Cancel</div>
        <div class="ui positive right labeled icon button">
          Add
          <i class="plus icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Modal;