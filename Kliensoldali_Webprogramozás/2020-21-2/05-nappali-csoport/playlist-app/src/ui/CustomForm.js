import Field from "./Field";

const CustomForm = () => {
  return (
    <div className='ui form'>
      <Field label='Username' icon='user' />
      <Field label='Password' icon='lock' />
      <div className='ui blue submit button'>Login</div>
    </div>
  );
};

export default CustomForm;