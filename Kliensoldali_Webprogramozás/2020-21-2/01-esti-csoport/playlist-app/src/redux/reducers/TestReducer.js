const initialState = {
  text: 'helo',
  animal: 'bear'
};

const TestReducer = (state = initialState, action) => {
  let theState = Object.assign({}, state);
  const { type, payload } = action;

  if (type === 'CHANGE_TEXT') {
    theState.text = payload.newText;
    return theState;
  } else if (type === 'CHANGE_ANIMAL_NAME') {
    const { newName } = payload;

    if (['dog', 'cat'].includes(newName)) {
      theState.animal = newName;
    }

    return theState;
  }

  return state;
};

export default TestReducer;