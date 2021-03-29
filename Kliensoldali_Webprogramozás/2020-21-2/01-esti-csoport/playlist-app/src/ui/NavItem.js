import { Link } from "react-router-dom";

const NavItem = ({ href, icon, text }) => {
  return (
    <Link to={href} className='item'>
      <i className={`${icon} icon`}></i>
      {text}
    </Link>
  );
};

export default NavItem;