export const addPlaylist = ({ header, description, genre }) => ({
  type: 'ADD_PLAYLIST',
  payload: { header, description, genre }
});