const initialState = {
  song: {
    name: 'It\'s my life',
    author: 'Bon Jovi',
    length: '4:35'
  },
  image: 'assets/bonjovi.jpg',
  spotifyLink: 'https://open.spotify.com/track/0v1XpBHnsbkCn7iJ9Ucr1l',
  chordsLink: 'https://tabs.ultimate-guitar.com/tab/bon-jovi/its-my-life-chords-951538',
  lyricsLink: 'https://www.azlyrics.com/lyrics/bonjovi/itsmylife.html'
};

const SongReducer = (state = initialState, action) => {
  let theState = Object.assign({}, state);
  const { type, payload } = action;

  if (type === 'CHANGE_SONG') {
    theState = {
      ...theState,
      ...payload
    };

    return theState;
  }


  return state;
};

export default SongReducer;