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

const PlaylistsReducer = (state = initialState, action) => {
  let theState = Object.assign({}, state);
  const { type, payload } = action;

  if (type === 'MODIFY_SONG') {
    const { genre, oldName, newName } = payload;

    if (!theState[genre]) {
      console.log('nincs ilyen műfaj :c');
      return state;
    }

    const i = theState[genre].findIndex(
      (song) => song.header === oldName
    );

    if (i === -1) {
      console.log('nincs ilyen szám :c');
      return state;
    }

    theState[genre][i] = {
      ...theState[genre][i],
      header: newName
     };

    return theState;
  } else if (type === 'CREATE_SONG') {
    const { genre, name, author } = payload;

    if (theState[genre]) {
      const i = theState[genre].findIndex(
        (song) => song.header === name
      );

      if (i === -1) {
        theState[genre].push({
          header: name,
          description: author
        });
      } else {
        console.log('Már van ilyen szám! 🎃');
        return state;
      }

    } else {
      theState[genre] = [{
        header: name,
        description: author
      }]
    }

    return theState;
  }

  return state;
};

export default PlaylistsReducer;