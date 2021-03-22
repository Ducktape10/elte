const NavItem = ({ href, icon, text }) => {
  return (
    <a className='item' href={href}>
      <i className={`${icon} icon`}></i>
      {text}
    </a>
  );
};

export default NavItem;