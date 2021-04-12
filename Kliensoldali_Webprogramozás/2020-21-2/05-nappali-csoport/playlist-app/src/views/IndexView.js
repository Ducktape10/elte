import { useContext, useEffect } from "react";
import { connect, useDispatch, useStore } from "react-redux";
import { CounterButtonContext } from "../providers/CounterButtonProvider";
import { changeText, multiplyNumber } from "../redux/actions/testAction";
import Field from "../ui/Field"

const IndexView = ({ test }) => {

  const { count, increaseCount } = useContext(CounterButtonContext);
  const dispatch = useDispatch();
  const store = useStore();

  useEffect(() => {
    // console.log(count);
    console.log(store.getState());
  }, [store]);

  const changeT = () => {
    // dispatch(changeText('changed'));
    dispatch(multiplyNumber(2));
  };

  return (
    <div className="ui center aligned container">
    <h1>{test?.number}</h1>
    <button onClick={changeT}>Teszt</button>
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

const mapStateToProps = (state) => ({
  test: state.test
});

export default connect(mapStateToProps)(IndexView);;