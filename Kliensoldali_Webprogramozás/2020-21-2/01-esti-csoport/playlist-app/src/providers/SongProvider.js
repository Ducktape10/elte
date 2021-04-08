import { createContext, useState } from "react";

export const SongContext = createContext();

const SongProvider = ({ children }) => {

  const [currentSong, setCurrentSong] = useState({
    song: {
      name: 'It\'s my life',
      author: 'Bon Jovi',
      length: '4:35'
    },
    image: 'assets/bonjovi.jpg',
    spotifyLink: 'https://open.spotify.com/track/0v1XpBHnsbkCn7iJ9Ucr1l',
    chordsLink: 'https://tabs.ultimate-guitar.com/tab/bon-jovi/its-my-life-chords-951538',
    lyricsLink: 'https://www.azlyrics.com/lyrics/bonjovi/itsmylife.html'
  });

  const value = { currentSong, setCurrentSong };

  return (
    <SongContext.Provider value={value}>{children}</SongContext.Provider>
  );
};

export default SongProvider;