const Field = ({ label, icon }) => {
  return (
    <div className='field'>
      <label>{label}</label>
      <div className='ui left icon input'>
        <input type='text' placeholder={label} />
        <i className={`${icon} icon`}></i>
      </div>
    </div>
  );
};

export default Field;
