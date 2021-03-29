const PlaylistItem = ({ icon, header, description, isActive, handleClick }) => {
  return (
    <div className={`item ${isActive ? 'active' : ''}`} onClick={handleClick}>
      <i className={`large ${icon} middle aligned icon`}></i>
      <div className="content">
        <a className="header">{header}</a>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default PlaylistItem;