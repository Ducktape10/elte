import { useContext } from "react";
import { useDispatch } from "react-redux";
import { SongContext } from "../providers/SongProvider";
import { changeSong } from "../redux/actions/SongAction";

const PlaylistItem = ({ icon, header, description, isActive, handleClick }) => {

  const dispatch  = useDispatch();
  // const { currentSong, setCurrentSong } = useContext(SongContext);

  const handleClickLocally = () => {

    // setCurrentSong({
    //   ...currentSong,
    //   song: {
    //     name: header,
    //     author: description
    //   }
    // });

    dispatch(changeSong({
      name: header,
      author: description
    }));

    // console.log(currentSong);
    handleClick();
  };

  return (
    <div className={`item ${isActive ? 'active' : ''}`} onClick={handleClickLocally}>
      <i className={`large ${icon} middle aligned icon`}></i>
      <div className="content">
        <a className="header">{header}</a>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default PlaylistItem;