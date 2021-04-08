import { createContext, useState } from "react";

export const CounterButtonContext = createContext();

const CounterButtonProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);

  const value = { count, increaseCount };

  return (
    <CounterButtonContext.Provider value={value}>{children}</CounterButtonContext.Provider>
  );
};

export default CounterButtonProvider;