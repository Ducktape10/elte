/* eslint-disable react/jsx-no-target-blank */
const SongInfo = ({ song, image, spotifyLink, lyricsLink, chordsLink }) => {
  return (
    <div className="ui segment">
      <div className="ui items">
        <div className="item">
          <div className="image">
            <img src={image} alt="TMP"/>
          </div>
          <div className="content">
            <a className="header" href="TMP">{song.name}</a>
            <div className="meta"><span>{song.author}</span><span>{song.length}</span></div>
                <div className="extra">
                  <a href={spotifyLink} className="ui button tiny green button" target="_blank">
                    <i className="spotify icon"></i>
                    Listen on Spotify
                  </a>
                  <a href={lyricsLink} className="ui button tiny teal button" target="_blank">
                    <i className="microphone icon"></i>
                    Show lyrics
                  </a>
                  <a href={chordsLink} className="ui button tiny orange button" target="_blank">
                    <i className="guitar icon"></i>
                    Show chords
                  </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongInfo;