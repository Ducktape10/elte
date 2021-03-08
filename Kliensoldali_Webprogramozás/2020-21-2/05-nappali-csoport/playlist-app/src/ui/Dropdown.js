const Dropdown = () => {
  return (
    <div class="ui right dropdown item">
      John Doe
      <i class="dropdown icon"></i>
      <div class="menu">
        <div class="item">
          <i class="user icon"></i> Profile
        </div>
        <div class="item">
          <i class="settings icon"></i> Settings
        </div>
        <div class="item">
          <i class="sign out icon"></i>Log out
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
