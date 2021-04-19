const initialState = {
  Classics: [
    {
      header: 'Highway to hell',
      description: 'AC/DC',
    },
    {
      header: 'Thunderstruck',
      description: 'AC/DC',
    },
    {
      header: 'Take me home country roads',
      description: 'John Denver',
    },
    {
      header: 'It\'s my life',
      description: 'Bon Jovi',
    },
    {
      header: 'Livin\' on a prayer',
      description: 'Bon Jovi',
    },
  ],
};

const playlistReducer = (state = initialState, action) => {
  let theState = Object.assign({}, state);

  if (action.type === 'ADD_PLAYLIST') {
    const playlist = action.payload;
    const { genre } = playlist;
    delete playlist.genre;

    if (theState[genre]) {
      theState[genre].push(playlist);
      return theState;
    }

    theState[genre] = [playlist];

    return theState;
  }


  return state;
};

export default playlistReducer;