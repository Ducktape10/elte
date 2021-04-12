const initialState = {
  text: 'initial',
  number: 42
};

const testReducer = (state = initialState, action) => {
  let theState = Object.assign({}, state);

  if (action.type === 'CHANGE_TEXT') {
    theState.text = action.payload?.newText;
    return theState;
  } else if (action.type === 'MULTIPLY_NUMBER') {
    theState.number *= action.payload?.number;
    return theState;
  }

  return state;
};

export default testReducer;