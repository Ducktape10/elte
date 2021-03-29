import { useContext } from 'react';
import { CounterContext } from './CounterProvider';

const CounterButton = () => {
  const { counter, increaseCounter } = useContext(CounterContext);

  return <button onClick={increaseCounter}>{counter}</button>;
};

export default CounterButton;