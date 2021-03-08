import Dropdown from "./Dropdown"

const Navbar = () => {
  return (
    <nav className='ui secondary menu'>
      <img src='assets/logo.png' alt='' />
      <a class='active item' href='index.html'><i class='home icon'></i> Home</a>
      <a class='item' href='playlists.html'><i class='headphones icon'></i> My Playlists</a>
      <a class='item' href='tracks.html'><i class='music icon'></i> Tracks</a>
      <a class='item' href='search.html'><i class='search icon'></i> Search</a>

      <Dropdown />
    </nav>
  );
};

export default Navbar;
