const SongTableRow = ({ author, songName }) => {
  return (
    <tr>
      <td className="collapsing"><i class="user icon"></i>{author}</td>
      <td><i class="music icon"></i>{songName}</td>
      <td className="right aligned collapsing">
        <button class="ui icon button blue"><i class="plus icon"></i></button>
      </td>
    </tr>
  );
};

export default SongTableRow;