const initialState = {
  name: '',
  description: '',
  wikipedia_url: ''
};

const CatReducer = (state = initialState, action) => {
  let theState = Object.assign({}, state);
  const { type, payload } = action;

  if (type === 'CHANGE_CAT') {
    return payload;
  }

  return state;
};

export default CatReducer;