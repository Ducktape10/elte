import { useContext, useEffect } from "react";
import { CounterContext } from "../example/CounterProvider";
import Field from "../ui/Field"

const IndexView = () => {
  // const { counter, increaseCounter } = useContext(CounterContext);

  // useEffect(() => {
  //   console.log(counter);
  // }, [counter]);

  return (
    <div className="ui center aligned container">
    {/* <button onClick={increaseCounter}>+1</button> */}
      <h1>My Playlist App</h1>
      <p>Welcome to MPA. To use this awesome piece of software you must log in.</p>
      <div className="ui segment">
        <div className="ui two column very relaxed stackable grid">
          <div className="column">
            <div className="ui form">
              <Field label='Username' icon='user'/>
              <Field label='Password' icon='lock'/>
              <div className="ui blue submit button">Login</div>
            </div>
          </div>
          <div className="middle aligned column">
            <div className="ui big button">
              <i className="signup icon"></i>
              Sign Up
            </div>
          </div>
        </div>
        <div className="ui vertical divider">Or</div>
      </div>
    </div>
  );
};

export default IndexView;