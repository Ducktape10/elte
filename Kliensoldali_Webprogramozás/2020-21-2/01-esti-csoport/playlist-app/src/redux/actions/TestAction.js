export const changeText = (newText) => ({
  type: 'CHANGE_TEXT',
  payload: { newText }
});

export const changeAnimalName = (newName) => ({
  type: 'CHANGE_ANIMAL_NAME',
  payload: { newName }
});

// () => {}
// () => ({})