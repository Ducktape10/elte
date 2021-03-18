const PlaylistItem = ({ icon, header, description }) => {
  return (
    <div class="item">
      <i class={`large ${icon} middle aligned icon`}></i>
      <div class="content">
        <a class="header" href="TMP">{header}</a>
        <div class="description">{description}</div>
      </div>
    </div>
  );
};

export default PlaylistItem;