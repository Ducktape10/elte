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
      <NavItem href='index.html' text='Home' icon='home' />
      <NavItem href='playlists.html' text='My Playlists' icon='headphones' />
    </nav>
  );
};

export default Navbar;