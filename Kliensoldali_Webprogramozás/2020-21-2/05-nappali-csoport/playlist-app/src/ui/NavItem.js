import { Link } from "react-router-dom";

const NavItem = ({ href, icon, text }) => {
  return (
    <Link className='item' to={href}>
      <i className={`${icon} icon`}></i>
      {text}
    </Link>
  );
};

export default NavItem;