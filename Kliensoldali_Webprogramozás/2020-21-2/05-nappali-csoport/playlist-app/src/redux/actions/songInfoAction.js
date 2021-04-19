export const changeSongInfo = ({ name, author }) => ({
  type: 'CHANGE_SONG_INFO',
  payload: { name, author }
});