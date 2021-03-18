const SongTableRow = ({ author, songName }) => {
  return (
    <tr>
      <td className="collapsing"><i className="user icon"></i>{author}</td>
      <td><i className="music icon"></i>{songName}</td>
      <td className="right aligned collapsing">
        <button className="ui icon button blue"><i className="plus icon"></i></button>
      </td>
    </tr>
  );
};

export default SongTableRow;