const initialState = {};

const catReducer = (state = initialState, action) => {
  let theState = Object.assign({}, state);
  const { type, payload } = action;

  if (type === 'SET_CAT') {
    // theState = payload;
    return payload;
  }

  return state;
};

export default catReducer;