import Field from "./ui/Field";
import Navbar from "./ui/Navbar";

function App() {
  return (
    <div>
      <Navbar />

      <div className='ui form'>
        <Field label='Username' icon='user'/>
        <Field label='Password' icon='lock'/>
      </div>
    </div>
  );
}

export default App;
