import { Button } from "semantic-ui-react";

const PlaylistItem = ({ icon, header, description, isActive, handleClick, setIsEditPlaylistModalOpen}) => {
  return (
    <div className={`item ${isActive ? 'active' : ''}`} onClick={handleClick}>
      <i className={`large ${icon} middle aligned icon`}></i>
      <div className="content">
        <a className="header">{header}</a>
        <div className="description">{description}</div>
        <Button onClick={() => setIsEditPlaylistModalOpen(true)}>Szerkesztés</Button>
      </div>
    </div>
  );
};

export default PlaylistItem;