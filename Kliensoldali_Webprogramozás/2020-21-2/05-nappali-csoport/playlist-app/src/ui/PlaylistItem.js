const PlaylistItem = ({ icon, header, description }) => {
  return (
    <div className="item">
      <i className={`large ${icon} middle aligned icon`}></i>
      <div className="content">
        <a className="header" href="TMP">{header}</a>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default PlaylistItem;