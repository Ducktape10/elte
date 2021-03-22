const Dropdown = () => {
  return (
    <div className="ui right dropdown item">
      John Doe
      <i className="dropdown icon"></i>
      <div className="menu">
        <div className="item">
          <i className="user icon"></i> Profile
        </div>
        <div className="item">
          <i className="settings icon"></i> Settings
        </div>
        <div className="item">
          <i className="sign out icon"></i>Log out
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
