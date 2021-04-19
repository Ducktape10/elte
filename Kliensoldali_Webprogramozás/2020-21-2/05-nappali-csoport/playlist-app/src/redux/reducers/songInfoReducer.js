const initialState = {
  name: 'It\'s my life',
  author: 'Bon Jovi'
};

const songInfoReducer = (state = initialState, action) => {
  let theState = Object.assign({}, state);

  if (action.type === 'CHANGE_SONG_INFO') {
    theState = action.payload;
    return theState;
  }

  return state;
};

export default songInfoReducer;