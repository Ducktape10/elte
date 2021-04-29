export const addPlaylist = ({ header, description, genre }) => ({
  type: 'ADD_PLAYLIST',
  payload: { header, description, genre }
});

export const modifyPlaylist = ({ oldHeader, header, description, genre }) => ({
  type: 'MODIFY_PLAYLIST',
  payload: { oldHeader, header, description, genre }
});
