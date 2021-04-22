export const changeSong = ({ name, author }) => ({
  type: 'CHANGE_SONG',
  payload: {
    song: {
      name,
      author
    }
   }
});
