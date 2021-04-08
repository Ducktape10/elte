import NavItem from "./NavItem"

const Navbar = () => {

  // const navItems = [
  //   {
  //     text: 'Home',
  //     href: 'index.html',
  //     icon: 'home'
  //   },
  //   {
  //     text: 'My Playlists',
  //     href: 'playlists.html',
  //     icon: 'headphones'
  //   },
  // ];

  return (
    <nav className='ui secondary menu'>
      {/* {navItems.map(
        (navItem, i) => <NavItem href={navItem.href} text={navItem.text} icon={navItem.icon} key={`navItem-${i}`}/>
      )} */}
      <NavItem href='/' text='Home' icon='home' />
      <NavItem href='/playlists' text='My Playlists' icon='headphones' />
      <NavItem href='/search' text='Search' icon='search' />
    </nav>
  );
};

export default Navbar;