export const modifySong = (genre, oldName, newName) => ({
  type: 'MODIFY_SONG',
  payload: {
    genre,
    oldName,
    newName
  }
});

export const createSong = (genre, name, author) => ({
  type: 'CREATE_SONG',
  payload: {
    genre,
    name,
    author
  }
});
