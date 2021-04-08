import { useContext } from 'react';
import { CounterButtonContext } from '../providers/CounterButtonProvider';

const CounterButton = () => {

  const { count, increaseCount } = useContext(CounterButtonContext);

  return (
    <div>
      <button onClick={increaseCount}>{count}</button>
    </div>
  );
};

export default CounterButton;