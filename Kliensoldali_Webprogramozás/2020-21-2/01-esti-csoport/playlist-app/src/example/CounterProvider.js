import { createContext, useState } from "react";

export const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const increaseCounter = () => setCounter(counter + 1);

  const value = { counter, increaseCounter };

  return (
    <CounterContext.Provider value={value}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;