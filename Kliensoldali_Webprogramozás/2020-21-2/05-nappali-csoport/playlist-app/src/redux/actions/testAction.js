export const changeText = (newText) => ({
  type: 'CHANGE_TEXT',
  payload: { newText }
});

export const multiplyNumber = (number) => ({
  type: 'MULTIPLY_NUMBER',
  payload: { number }
});


// function
// nem ad vissza semmit
// () => {}

// function
// visszaad egy üres objektumot
// () => ({})