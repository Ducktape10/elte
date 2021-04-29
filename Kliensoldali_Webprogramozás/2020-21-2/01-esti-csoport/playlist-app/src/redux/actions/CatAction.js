export const changeCat = ({ name, description, wikipedia_url }) => ({
  type: 'CHANGE_CAT',
  payload: {
    name,
    description,
    wikipedia_url
   }
});
